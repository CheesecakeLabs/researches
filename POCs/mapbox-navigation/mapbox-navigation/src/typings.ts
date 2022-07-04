import {ImageSourcePropType} from 'react-native';

/** @type {[number, number]}
 * Provide an array with longitude and latitude [$longitude, $latitude]
 */
type Coordinate = [number, number];

export type PointAnnotation = [number, number, ImageSourcePropType];

type OnLocationChangeEvent = {
  nativeEvent?: {
    latitude: number;
    longitude: number;
  };
};

type OnRouteProgressChangeEvent = {
  nativeEvent?: {
    distanceTraveled: number;
    durationRemaining: number;
    fractionTraveled: number;
    distanceRemaining: number;
  };
};

type OnErrorEvent = {
  nativeEvent?: {
    message?: string;
  };
};

export interface IMapboxNavigationProps {
  origin: Coordinate;
  destination: Coordinate;
  points: PointAnnotation[];
  shouldSimulateRoute?: boolean;
  onLocationChange?: (event: OnLocationChangeEvent) => void;
  onRouteProgressChange?: (event: OnRouteProgressChangeEvent) => void;
  onError?: (event: OnErrorEvent) => void;
  onCancelNavigation?: () => void;
  onArrive?: () => void;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
  mute?: boolean;
}
