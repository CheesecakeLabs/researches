import 'config/env'
import express from 'express'
import { Server } from 'socket.io'

import { exceptionMiddleware } from 'api/core/middlewares/exception'
import { routes } from 'api/core/routes'
import { initializeDatabase } from 'config/database'
import { http } from 'interfaces'

let app: Application | null = null

class Application {
  public project: string
  public http: express.Application
  public io: Server

  constructor() {
    // SETTINGS
    this.project = 'project_name'
    this.config().then(async () => {
      // INTERFACES
      this.http = http

      routes(http)

      http.use(exceptionMiddleware)
    })
  }

  private async config(): Promise<void> {
    await initializeDatabase()
  }
}

function getServer(): Application {
  if (app !== null) return app

  app = new Application()
  return app
}

export default getServer()
