import express, { NextFunction, Request, Response, Router } from 'express'

import { HttpStatusCodes } from 'api/core/utils/http/status-code'

import { routes as digitalHealthRoutes } from '../digital-health/routes'

function routes(http: express.Application): void {
  http.get('/health-check', (req, res) => {
    res.status(HttpStatusCodes.OK).send()
  })
  digitalHealthRoutes(http)
}

export { routes, Request, Response, Router, NextFunction }
