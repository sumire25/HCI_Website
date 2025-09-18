import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Conoce nuestro proyecto
            </h1>
            {/* <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-muted-foreground text-pretty">
              Un pr
            </p> */}
          </div>
        </div>
      </section>

      {/* Course Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Problemática</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed mb-4">
                    Todas las personamos experimentamos miedos o fobias en algun momento de nuestras vidas. Estos miedos pueden variar desde fobias comunes como el miedo a las alturas o a los espacios cerrados, hasta miedos mas especificos y personales. Si bien estos miedos naturales si ponemos de nuestra parte en afrontarlos podemos llegar al camino de la luz dejarlos atras.
                  </p>
                  <p className="leading-relaxed">
                    Este proyecto documenta el desarrollo de dos experiencias de realidad virtual (VR) creadas por estudiantes
                    del curso de Interacción Humano-Computador (HCI) en la Universidad Nacional de Sán Agustín de Arequipa, Perú.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Themes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Objetivos</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Interacción</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El usuario debe poder interactuar con el entorno virtual de manera natural e intuitiva utilizando sus manos para realizar gestos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Diseño centrado en el usuario</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recibir feedback constante de los usuarios para iterar y mejorar la experiencia para que sea accesible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Inmersion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Evaluar las acciones, reacciones y emociones de los usuarios para hacer una experiencia inmersiva y convincente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      {/* <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Development Methodology</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Research & Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive study of existing VR applications, user behavior patterns, and HCI best practices to
                    inform design decisions and establish project foundations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Conceptual Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Development of initial concepts, user personas, and interaction flows through sketching,
                    wireframing, and rapid prototyping techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Implementation & Testing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Iterative development cycles combining technical implementation with continuous user testing,
                    feedback collection, and design refinement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Evaluation & Documentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive assessment of project outcomes, user experience metrics, and lessons learned to inform
                    future VR development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Navigation */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Explora el proceso</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Dividido en dos partes:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Videojuego VR</h3>
                  <p className="text-muted-foreground mb-6">
                    Proceso completo de desarrollo desde el concepto inicial hasta la implementacion final
                  </p>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link href="/vr-game">Ver linea de tiempo</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Pryecto final VR</h3>
                  <p className="text-muted-foreground mb-6">
                    Explora el desarrollo desde la investigacion inicial hasta el producto final
                  </p>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link href="/final-project">Ver liena de tiempo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
