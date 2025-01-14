import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

export default function ErrorBoundaryComp({ children }) {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
}
