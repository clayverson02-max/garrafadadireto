import { createFileRoute } from "@tanstack/react-router";
import produto from "@/assets/produto-garrafada.png.asset.json";
import ingredientes from "@/assets/ingredientes.jpg";

const CHECKOUT_URL =
  "https://checkout.wiven.com.br/checkout/cmrk289w90i5f01pvn2yblhh9?offer=MJT8T3B";

function trackClick() {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", { value: 14.99, currency: "BRL" });
  }
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={trackClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-shine cta-pulse relative block w-full overflow-hidden rounded-2xl bg-cta px-5 py-5 text-center text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-xl transition active:scale-[0.98] sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}

function ShortEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-primary/20">
      <div className="relative" style={{ paddingBottom: "177.78%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=0&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&loop=1&playlist=${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Urgency bar */}
      <div className="w-full bg-primary py-2 text-center text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:text-sm">
        🔥 Promoção por tempo limitado — 50% OFF
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-xl px-5 pt-8 pb-10 text-center">
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Receita tradicional brasileira
        </span>
        <h1 className="mt-4 text-4xl font-black leading-[1.05] text-primary sm:text-5xl">
          Garrafada Natural
          <span className="mt-1 block font-display text-2xl font-bold italic text-accent sm:text-3xl">
            para Diabetes
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          A receita tradicional que está devolvendo qualidade de vida para{" "}
          <strong className="text-foreground">milhares de pessoas</strong>.
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-border">
          <img
            src={produto.url}
            alt="Garrafada Natural para auxílio ao controle da glicemia"
            width={1024}
            height={1024}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground line-through">De R$ 29,90</p>
          <p className="mt-1 text-4xl font-black text-cta">
            R$ <span className="text-5xl">14,99</span>
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Promoção por tempo limitado
          </p>
        </div>

        <CTA className="mt-5">Quero eliminar essa dor agora por R$ 14,99</CTA>
        <p className="mt-3 text-xs text-muted-foreground">
          ✓ Acesso imediato · ✓ Pagamento seguro · ✓ Garantia de 30 dias
        </p>
      </section>

      {/* PAIN */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-xl px-5 py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            A dor que quase ninguém fala
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Você já perdeu a conta de quantas noites acordou para ir ao banheiro?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/90">
            <p>
              Você sente <strong>cansaço o tempo todo</strong>, mesmo dormindo a noite inteira.
              Tem <strong>sede constante</strong>, acorda várias vezes de madrugada.
            </p>
            <p>
              Vive com aquela preocupação na cabeça sobre o futuro, sobre os exames, sobre
              o que pode acontecer se nada mudar.
            </p>
            <p>
              A diabetes rouba sua energia, sua disposição, sua liberdade. Você tenta
              controlar, mas parece que o corpo não responde como deveria.
            </p>
            <p className="rounded-xl border-l-4 border-gold bg-white/5 p-4 text-primary-foreground">
              E o pior: você <strong>sabe</strong> que está perdendo qualidade de vida dia após dia.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mx-auto max-w-xl px-5 py-14 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">A solução</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
          Chegou a solução que você estava esperando
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Imagine acordar com <strong className="text-foreground">energia renovada</strong>,
          sem aquela sede insaciável, com a mente mais tranquila e o corpo respondendo melhor.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Isso é o que a <strong className="text-primary">Garrafada Natural para Diabetes</strong>{" "}
          tem proporcionado para milhares de pessoas.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Uma receita tradicional brasileira, poderosa e acessível, feita com plantas medicinais
          conhecidas por auxiliar o organismo a recuperar o equilíbrio natural da glicose.
        </p>
      </section>

      {/* INGREDIENTS */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-xl px-5 py-14">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
            Ingredientes
          </p>
          <h2 className="mt-3 text-center text-3xl font-black leading-tight text-primary sm:text-4xl">
            O poder das plantas medicinais
          </h2>
          <p className="mt-4 text-center text-base text-muted-foreground">
            As 5 plantas mais eficazes da medicina popular brasileira, combinadas em uma
            única receita.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <img
              src={ingredientes}
              alt="Ingredientes da garrafada: pata-de-vaca, jambolão, carqueja, canela, insulina vegetal"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>

          <ul className="mt-8 space-y-3">
            {[
              ["Pata-de-Vaca", "A famosa \u201CInsulina Vegetal\u201D"],
              ["Folha de Jambolão", "Ajuda a reduzir os picos de açúcar"],
              ["Carqueja", "Auxilia o fígado e a digestão"],
              ["Canela em Pau", "Melhora a sensibilidade à insulina"],
              ["Insulina Vegetal", "Fortalece o efeito de todo o conjunto"],
            ].map(([name, desc]) => (
              <li
                key={name}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  🌿
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-primary">{name}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground">
            <p className="text-sm font-bold uppercase tracking-widest text-gold">
              Juntas, elas trabalham para:
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Reduzir a sede excessiva",
                "Devolver energia e disposição",
                "Apoiar o controle natural da glicose",
                "Trazer de volta a sensação de bem-estar e leveza",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="mx-auto max-w-xl px-5 py-14">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
          Veja com seus próprios olhos
        </p>
        <h2 className="mt-3 text-center text-3xl font-black leading-tight text-primary sm:text-4xl">
          Histórias reais de quem já usa
        </h2>
        <div className="mt-8 space-y-8">
          <div>
            <ShortEmbed id="kDT8CZakXVc" title="Depoimento — mulher que fez a receita" />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              A história de quem já compartilhou essa receita com milhares de pessoas.
            </p>
          </div>
          <div>
            <ShortEmbed id="0w0Ispl9q3Q" title="Feedback de cliente" />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Feedback real de quem já está usando.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-xl px-5 py-14">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
            Depoimentos
          </p>
          <h2 className="mt-3 text-center text-3xl font-black text-primary sm:text-4xl">
            Resultados reais
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "Depois de 20 dias usando a garrafada, minha sede diminuiu muito e voltei a ter energia para trabalhar e viver normalmente.",
                n: "João Pedro",
                a: "42 anos",
              },
              {
                q: "Estou me sentindo outra pessoa. A glicose estabilizou e consigo aproveitar mais o dia.",
                n: "Ana Clara",
                a: "57 anos",
              },
              {
                q: "Simples de fazer, natural e realmente funciona. Recomendo para quem quer uma ajuda extra.",
                n: "Marcos Silva",
                a: "48 anos",
              },
            ].map((t) => (
              <figure
                key={t.n}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-2 text-base leading-relaxed text-foreground">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-primary">
                  — {t.n},{" "}
                  <span className="font-normal text-muted-foreground">{t.a}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="mx-auto max-w-xl px-5 py-14">
        <div className="rounded-3xl border-2 border-cta/40 bg-card p-6 shadow-2xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-cta">
            Oferta irrecusável
          </p>
          <h2 className="mt-3 text-center text-3xl font-black leading-tight text-primary sm:text-4xl">
            Tudo o que você recebe hoje
          </h2>

          <ul className="mt-6 space-y-3">
            {[
              ["Receita completa e detalhada", "A garrafada tradicional passo a passo"],
              ["Modo de preparo super simples", "Feito em minutos, na sua cozinha"],
              ["Guia de uso e dicas exclusivas", "Para potencializar os resultados"],
              ["Suporte via WhatsApp por 30 dias", "Tire suas dúvidas com nosso time"],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  ✓
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-primary">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-secondary p-5 text-center">
            <p className="text-sm text-muted-foreground line-through">De R$ 29,90</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Apenas hoje por
            </p>
            <p className="mt-1 text-5xl font-black text-cta">R$ 14,99</p>
            <p className="mt-1 text-xs text-muted-foreground">Pagamento único · acesso vitalício</p>
          </div>

          <CTA className="mt-6">Sim, quero minha garrafada por R$ 14,99</CTA>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-lg text-accent-foreground">
              🛡️
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-primary">Garantia total de 30 dias</p>
              <p className="text-sm text-muted-foreground">
                Se não sentir diferença, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-xl px-5 py-14 text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Você já sofreu o suficiente
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/90">
            Chegou o momento de tomar uma atitude <strong>simples, natural e barata</strong>{" "}
            que pode mudar sua rotina para melhor.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
            Milhares já estão vivendo com mais saúde e leveza.
          </p>
          <p className="mt-4 text-lg font-bold text-gold">Agora é a sua vez.</p>

          <div className="mt-8">
            <CTA>Quero minha garrafada agora — R$ 14,99</CTA>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">
            ✓ Compra 100% segura · ✓ Garantia de 30 dias · ✓ Acesso imediato
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-xl px-5 text-center text-xs text-muted-foreground">
          <p>
            Este produto não substitui acompanhamento médico. Não interrompa tratamentos
            prescritos sem orientação profissional. Resultados podem variar de pessoa para
            pessoa.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Garrafada Natural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
