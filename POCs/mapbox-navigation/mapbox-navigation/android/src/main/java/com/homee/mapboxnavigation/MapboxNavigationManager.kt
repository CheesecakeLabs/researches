package com.homee.mapboxnavigation

import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.mapbox.geojson.Point
import com.mapbox.maps.ResourceOptionsManager
import com.mapbox.maps.TileStoreUsageMode
import com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions
import java.io.IOException
import java.net.URL
import javax.annotation.Nonnull
import kotlin.concurrent.thread


class MapboxNavigationManager(var mCallerContext: ReactApplicationContext) : SimpleViewManager<MapboxNavigationView>() {
    private var accessToken: String? = null

    init {
        mCallerContext.runOnUiQueueThread {
            try {
                val app = mCallerContext.packageManager.getApplicationInfo(mCallerContext.packageName, PackageManager.GET_META_DATA)
                val bundle = app.metaData
                val accessToken = bundle.getString("MAPBOX_ACCESS_TOKEN")
                this.accessToken = accessToken
                ResourceOptionsManager.getDefault(mCallerContext, accessToken).update {
                    tileStoreUsageMode(TileStoreUsageMode.READ_ONLY)
                }
            } catch (e: PackageManager.NameNotFoundException) {
                e.printStackTrace()
            }
        }
    }

    override fun getName(): String {
        return "MapboxNavigation"
    }

    public override fun createViewInstance(@Nonnull reactContext: ThemedReactContext): MapboxNavigationView {
        return MapboxNavigationView(reactContext, this.accessToken)
    }

    override fun onDropViewInstance(view: MapboxNavigationView) {
        view.onDropViewInstance()
        super.onDropViewInstance(view)
    }

    override fun getExportedCustomDirectEventTypeConstants(): MutableMap<String, Map<String, String>>? {
        return MapBuilder.of<String, Map<String, String>>(
                "onLocationChange", MapBuilder.of("registrationName", "onLocationChange"),
                "onError", MapBuilder.of("registrationName", "onError"),
                "onCancelNavigation", MapBuilder.of("registrationName", "onCancelNavigation"),
                "onArrive", MapBuilder.of("registrationName", "onArrive"),
                "onRouteProgressChange", MapBuilder.of("registrationName", "onRouteProgressChange"),
        )
    }

    @ReactProp(name = "origin")
    fun setOrigin(view: MapboxNavigationView, sources: ReadableArray?) {
        if (sources == null) {
            view.setOrigin(null)
            return
        }
        view.setOrigin(Point.fromLngLat(sources.getDouble(0), sources.getDouble(1)))
    }

    @ReactProp(name = "destination")
    fun setDestination(view: MapboxNavigationView, sources: ReadableArray?) {
        if (sources == null) {
            view.setDestination(null)
            return
        }
        view.setDestination(Point.fromLngLat(sources.getDouble(0), sources.getDouble(1)))
    }

    @ReactProp(name = "shouldSimulateRoute")
    fun setShouldSimulateRoute(view: MapboxNavigationView, shouldSimulateRoute: Boolean) {
        view.setShouldSimulateRoute(shouldSimulateRoute)
    }

    @ReactProp(name = "showsEndOfRouteFeedback")
    fun setShowsEndOfRouteFeedback(view: MapboxNavigationView, showsEndOfRouteFeedback: Boolean) {
        view.setShowsEndOfRouteFeedback(showsEndOfRouteFeedback)
    }

    @ReactProp(name = "mute")
    fun setMute(view: MapboxNavigationView, mute: Boolean) {
        view.setMute(mute)
    }

    @ReactProp(name = "points")
    fun setPoints(view: MapboxNavigationView, sources: ReadableArray?) {
        try {
            for (i in sources!!.toArrayList()) {
                val element: Map<String, Any> = i as Map<String, Any>
                val imageElement: Map<String, Any> = element["image"] as Map<String, Any>

                thread {
                    val url = URL(imageElement["uri"].toString())
                    val image: Bitmap = BitmapFactory.decodeStream(url.openConnection().getInputStream())

                    val pointAnnotationOptions: PointAnnotationOptions = PointAnnotationOptions()
                            .withPoint(Point.fromLngLat(element["long"].toString().toDouble(), element["lat"].toString().toDouble()))
                            .withIconImage(image)

                    view.setPoint(pointAnnotationOptions)
                }

            }

        } catch (e: Exception) {
            Log.e("MapBoxPoints", e.stackTraceToString())
        }
    }
}
