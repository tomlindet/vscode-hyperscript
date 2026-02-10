import type { FC } from 'hono/jsx'

import { html } from 'hono/html'

const ContratTab: FC = ({ data, existing }) => {
  return (
    <>
      {html`<script type="text/hyperscript">
        def updateContratBadge()
          repeat in <[data-tab="contrat"]/>
            if it's value then
              increment filled
            end
            increment total
            end
            put filled+"/"+total into #contrat-badge
            if filled === total then
              add .bg-success to #contrat-badge
              remove .bg-danger from #contrat-badge
            else
              add .bg-danger to #contrat-badge
              remove .bg-success from #contrat-badge
            end
      </script>`}
      <button _="on click log('clicked')" hx-get="/hello" class="btn btn-primary"></button>
    </>
  )
}
export default ContratTab
