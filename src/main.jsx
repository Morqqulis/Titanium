import '@styles/index.scss'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
//...
import * as Sentry from '@sentry/react'

Sentry.init({
    dsn: 'https://4f251d3986bbd9cfdf103cccac73761c@o4507316977270784.ingest.de.sentry.io/4507316980416592',
    integrations: [
        Sentry.browserTracingIntegration(),
        // Sentry.metrics.metricsAggregatorIntegration(),

        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect
        }),
        Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true
        })
    ],

    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
