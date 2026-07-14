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
      className={`cta-shine cta-pulse relative block w-full overflow-hidden rounded-2xl bg-cta px-6 py-6 text-center text-lg font-black uppercase tracking-wide text-cta-foreground shadow-xl transition active:scale-[0.98] sm:text-xl ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Enquadra o Short do YouTube escondendo toda a UI:
 * usamos um wrapper 9:16 com overflow-hidden e escalamos o iframe
 * (16:9 nativo) para que o vídeo preencha a área vertical, cortando
 * as bordas onde aparecem título, canal e botões do YouTube.
 */
function ShortEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-primary/20">
      {/* wrapper vertical 9:16 */}
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        {/* iframe escalado pra cobrir e esconder UI do YouTube */}
        <iframe
          className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 border-0"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&loop=1&playlist=${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
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
      <div className="w-full bg-primary py-2.5 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground">
        🔥 Promoção por tempo limitado · 50% OFF
      </div>

      {/* HERO com desejo primeiro, sem CTA */}
      <section className="mx-auto max-w-xl px-5 pt-10 pb-8 text-center">
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-bold uppercase tracking-wider text-accent">
          Receita tradicional brasileira
        </span>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] text-primary sm:text-6xl">
          Garrafada Natural
          <span className="mt-2 block font-display text-3xl font-bold italic text-accent sm:text-4xl">
            para Diabetes
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl">
          A receita tradicional que está devolvendo qualidade de vida para{" "}
          <strong className="text-foreground">milhares de pessoas</strong>.
        </p>

        <div className="mt-7 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-border">
          <img
            src={produto.url}
            alt="Garrafada Natural para auxílio ao controle da glicemia"
            width={1024}
            height={1024}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* DOR + DESEJO combinados */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-xl px-5 py-14">
          <p className="text-sm font-black uppercase tracking-widest text-gold">
            A dor que quase ninguém fala
          </p>
          <h2 className="mt-3 text-4xl font-black leading-[1.1] sm:text-5xl">
            Você já perdeu a conta de quantas noites acordou pra ir ao banheiro?
          </h2>
          <div className="mt-6 space-y-5 text-lg font-medium leading-relaxed text-primary-foreground/95 sm:text-xl">
            <p>
              Cansaço o tempo todo. Sede que não passa. A cabeça pesada com a preocupação
              dos exames, do futuro, do que pode acontecer se nada mudar.
            </p>
            <p>
              A diabetes rouba sua energia, sua disposição, sua liberdade. Você tenta
              controlar, mas parece que o corpo simplesmente não responde.
            </p>
            <p className="rounded-xl border-l-4 border-gold bg-white/10 p-5 text-primary-foreground">
              E o pior é saber, no fundo, que a qualidade de vida está indo embora um
              pouco a cada dia.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-black uppercase tracking-widest text-gold">
              Agora imagine o oposto
            </p>
            <p className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
              Acordar leve. Com energia de verdade. Sem aquela sede insaciável. Com o
              corpo respondendo do jeito que sempre respondeu.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              É exatamente isso que a <strong className="text-gold">Garrafada Natural para Diabetes</strong>{" "}
              tem feito por milhares de brasileiros que já cansaram de esperar solução.
            </p>
          </div>
        </div>
      </section>

      {/* INGREDIENTES · gerando desejo pela receita */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-xl px-5 py-14">
          <p className="text-center text-sm font-black uppercase tracking-widest text-accent">
            O poder das plantas
          </p>
          <h2 className="mt-3 text-center text-4xl font-black leading-tight text-primary sm:text-5xl">
            5 plantas medicinais em uma única receita secreta
          </h2>
          <p className="mx-auto mt-5 max-w-md text-center text-lg font-medium text-foreground/80">
            A combinação exata que a medicina popular brasileira usa há décadas pra
            equilibrar o açúcar no sangue de forma 100% natural.
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
              ["Pata de Vaca", "Conhecida como a insulina vegetal"],
              ["Folha de Jambolão", "Ajuda a segurar os picos de açúcar"],
              ["Carqueja", "Cuida do fígado e da digestão"],
              ["Canela em Pau", "Melhora a sensibilidade à insulina"],
              ["Insulina Vegetal", "Potencializa o efeito de todo o conjunto"],
            ].map(([name, desc]) => (
              <li
                key={name}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-xl text-accent">
                  🌿
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-black text-primary">{name}</p>
                  <p className="text-base text-foreground/70">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground">
            <p className="text-sm font-black uppercase tracking-widest text-gold">
              Juntas, essas 5 plantas trabalham para
            </p>
            <ul className="mt-4 space-y-2.5 text-lg font-medium">
              {[
                "Reduzir a sede excessiva",
                "Devolver energia e disposição",
                "Apoiar o controle natural da glicose",
                "Trazer de volta a leveza no dia a dia",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base italic text-primary-foreground/85">
              E o melhor: você recebe a receita completa, com medidas exatas e modo de
              preparo, pra fazer na sua própria cozinha sempre que precisar.
            </p>
          </div>
        </div>
      </section>

      {/* VÍDEO 1 · a mulher que fez a receita */}
      <section className="mx-auto max-w-xl px-5 py-14">
        <p className="text-center text-sm font-black uppercase tracking-widest text-accent">
          Conheça a receita
        </p>
        <h2 className="mt-3 text-center text-4xl font-black leading-tight text-primary sm:text-5xl">
          A mulher que compartilhou essa receita com milhares de pessoas
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-lg font-medium text-foreground/80">
          Ela conta como faz a garrafada em casa, os benefícios que sentiu no próprio
          corpo e por que decidiu ensinar essa receita pra tanta gente.
        </p>

        <div className="mt-8">
          <ShortEmbed id="kDT8CZakXVc" title="A mulher que fez a receita" />
        </div>
      </section>

      {/* VÍDEO 2 · feedback real */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-xl px-5 py-14">
          <p className="text-center text-sm font-black uppercase tracking-widest text-accent">
            Feedback real
          </p>
          <h2 className="mt-3 text-center text-4xl font-black leading-tight text-primary sm:text-5xl">
            Veja o resultado de quem já está usando
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-lg font-medium text-foreground/80">
            Um relato espontâneo de quem começou a tomar a garrafada e notou a diferença
            em poucos dias.
          </p>

          <div className="mt-8">
            <ShortEmbed id="0w0Ispl9q3Q" title="Feedback de cliente real" />
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Depois de 20 dias tomando a garrafada, minha sede diminuiu muito e eu voltei a ter energia pra trabalhar.",
                n: "João Pedro",
                a: "42 anos",
              },
              {
                q: "Estou me sentindo outra pessoa. A glicose estabilizou e eu consigo aproveitar meu dia de verdade.",
                n: "Ana Clara",
                a: "57 anos",
              },
              {
                q: "Simples de fazer, natural e realmente funciona. Recomendo pra quem quer uma ajuda extra.",
                n: "Marcos Silva",
                a: "48 anos",
              },
            ].map((t) => (
              <figure
                key={t.n}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="text-lg text-gold">★★★★★</div>
                <blockquote className="mt-2 text-lg leading-relaxed text-foreground">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-3 text-base font-bold text-primary">
                  {t.n},{" "}
                  <span className="font-medium text-foreground/70">{t.a}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA + CTA (perto do final) */}
      <section className="mx-auto max-w-xl px-5 py-14">
        <div className="rounded-3xl border-2 border-cta/40 bg-card p-6 shadow-2xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-cta">
            Oferta especial de hoje
          </p>
          <h2 className="mt-3 text-center text-4xl font-black leading-tight text-primary sm:text-5xl">
            Leve hoje por menos de um lanche
          </h2>

          <ul className="mt-7 space-y-3">
            {[
              "Receita completa da garrafada tradicional",
              "Modo de preparo simples, feito na sua cozinha",
              "Guia de uso pra potencializar os resultados",
              "Suporte por WhatsApp durante 30 dias",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-base font-black text-accent-foreground">
                  ✓
                </span>
                <p className="text-lg font-bold text-primary">{t}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-secondary p-6 text-center">
            <p className="text-base text-foreground/60 line-through">De R$ 29,90</p>
            <p className="mt-1 text-sm font-black uppercase tracking-widest text-accent">
              Apenas hoje por
            </p>
            <p className="mt-1 text-6xl font-black text-cta">R$ 14,99</p>
            <p className="mt-2 text-sm font-medium text-foreground/70">
              Pagamento único · acesso vitalício
            </p>
          </div>

          <CTA className="mt-6">Quero minha garrafada por R$ 14,99</CTA>
          <p className="mt-3 text-center text-sm font-medium text-foreground/70">
            ✓ Acesso imediato · ✓ Pagamento seguro · ✓ Garantia de 30 dias
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-xl text-accent-foreground">
              🛡️
            </span>
            <div className="min-w-0">
              <p className="text-lg font-black text-primary">Garantia total de 30 dias</p>
              <p className="text-base text-foreground/75">
                Se não sentir diferença, devolvemos 100% do seu dinheiro. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-xl px-5 py-14 text-center">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Você já sofreu o suficiente
          </h2>
          <p className="mt-6 text-xl font-medium leading-relaxed text-primary-foreground/95">
            Chegou a hora de tomar uma atitude simples, natural e barata que pode virar
            sua rotina de cabeça pra baixo, no melhor sentido.
          </p>
          <p className="mt-4 text-2xl font-bold text-gold">Agora é a sua vez.</p>

          <div className="mt-8">
            <CTA>Quero minha garrafada agora por R$ 14,99</CTA>
          </div>
          <p className="mt-4 text-sm font-medium text-primary-foreground/80">
            ✓ Compra 100% segura · ✓ Garantia de 30 dias · ✓ Acesso imediato
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-xl px-5 text-center text-xs text-foreground/60">
          <p>
            Este produto não substitui acompanhamento médico. Não interrompa tratamentos
            prescritos sem orientação profissional. Resultados podem variar de pessoa
            para pessoa.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Garrafada Natural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
