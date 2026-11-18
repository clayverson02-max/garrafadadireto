import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import appCss from '../styles.css?url';
const title = 'JV Pneus | Pneus e serviços automotivos em Caucaia';
const description = 'Pneus, suspensão, alinhamento e balanceamento no Potira, em Caucaia. Fale com a JV Pneus pelo WhatsApp ou trace a rota até a oficina.';
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
 head: () => ({
  meta: [{ charSet:'utf-8' }, { name:'viewport',content:'width=device-width, initial-scale=1' }, {title}, {name:'description',content:description}, {name:'theme-color',content:'#8126b2'}, {property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:locale',content:'pt_BR'},{property:'og:image',content:'https://jv-pneus-caucaia.lovable.app/jv-pneus/logo.webp'},{name:'twitter:card',content:'summary_large_image'}],
  links:[{rel:'stylesheet',href:appCss},{rel:'icon',type:'image/webp',href:'/jv-pneus/logo.webp'},{rel:'canonical',href:'https://jv-pneus-caucaia.lovable.app/'}],
 }),
 shellComponent: ({children}:{children:ReactNode}) => <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>,
 component: Root,
 notFoundComponent: () => <main style={{padding:32,textAlign:'center'}}><h1>Página não encontrada</h1><a href="/">Voltar para a JV Pneus</a></main>,
});
function Root(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>}
