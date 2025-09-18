import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const finalProjectTimelineData = [
  {
    id: "1",
    title: "Advanced Research & Literature Review",
    date: "Week 1-3",
    phase: "Research",
    description:
      "Conducted extensive literature review on cutting-edge VR technologies, accessibility in virtual environments, and advanced HCI methodologies. Established theoretical foundation for the capstone project.",
    achievements: [
      "Reviewed 50+ academic papers on VR accessibility and inclusive design",
      "Analyzed emerging technologies: eye tracking, brain-computer interfaces",
      "Identified research gap in VR accessibility for users with motor impairments",
      "Developed comprehensive research methodology framework",
    ],
    status: "completed" as const,
    image: "/accessibility-research-literature-review-academic-papers.jpg",
  },
  {
    id: "2",
    title: "Concept Refinement & Stakeholder Engagement",
    date: "Week 4-5",
    phase: "Planning",
    description:
      "Refined project concept through stakeholder interviews and expert consultations. Focused on creating an accessible VR training environment for professional skill development.",
    achievements: [
      "Conducted interviews with 8 accessibility experts and VR researchers",
      "Defined project scope: 'AccessiVR' - inclusive professional training platform",
      "Established partnerships with local disability advocacy groups",
      "Created detailed project charter and success metrics",
    ],
    status: "completed" as const,
    image: "/stakeholder-interviews-accessibility-experts-meeting.jpg",
  },
  {
    id: "3",
    title: "User Research & Accessibility Analysis",
    date: "Week 6-8",
    phase: "Research",
    description:
      "Comprehensive user research focusing on accessibility needs and barriers in VR environments. Developed inclusive design principles and accessibility guidelines.",
    achievements: [
      "Conducted user research with 15 participants with diverse abilities",
      "Developed comprehensive accessibility audit framework",
      "Created inclusive design guidelines for VR interfaces",
      "Established baseline accessibility metrics and testing protocols",
    ],
    status: "completed" as const,
    image: "/accessibility-user-research-diverse-participants-testing.jpg",
  },
  {
    id: "4",
    title: "Technical Architecture & Prototyping",
    date: "Week 9-11",
    phase: "Development",
    description:
      "Designed and implemented technical architecture supporting multiple input modalities and accessibility features. Built initial prototypes for core accessibility systems.",
    achievements: [
      "Implemented multi-modal input system (voice, eye tracking, gesture)",
      "Developed adaptive UI system that responds to user capabilities",
      "Created prototype accessibility testing environment",
      "Established modular architecture for scalable accessibility features",
    ],
    status: "completed" as const,
    image: "/vr-technical-architecture-multi-modal-input-system.jpg",
  },
  {
    id: "5",
    title: "Accessibility Feature Implementation",
    date: "Week 12-14",
    phase: "Development",
    description:
      "Implemented comprehensive accessibility features including alternative input methods, customizable interfaces, and assistive technology integration.",
    achievements: [
      "Integrated voice command system with 98% accuracy",
      "Implemented eye-tracking navigation for users with limited mobility",
      "Developed customizable UI scaling and contrast options",
      "Created screen reader compatibility for VR text elements",
    ],
    status: "completed" as const,
    image: "/vr-accessibility-features-voice-eye-tracking-interface.jpg",
  },
  {
    id: "6",
    title: "Comprehensive User Testing & Validation",
    date: "Week 15-16",
    phase: "Testing",
    description:
      "Extensive testing with diverse user groups to validate accessibility features and overall user experience. Iterative refinement based on user feedback.",
    achievements: [
      "Completed accessibility testing with 20 users across different ability levels",
      "Achieved 95% task completion rate across all user groups",
      "Validated WCAG 2.1 AA compliance for VR interface elements",
      "Documented comprehensive accessibility testing methodology",
    ],
    status: "completed" as const,
    image: "/comprehensive-vr-accessibility-testing-validation-users.jpg",
  },
  {
    id: "7",
    title: "Advanced Feature Integration",
    date: "Week 17-18",
    phase: "Enhancement",
    description:
      "Integrated advanced features including AI-powered personalization, adaptive learning systems, and real-time accessibility adjustments based on user behavior.",
    achievements: [
      "Implemented AI-driven interface adaptation system",
      "Developed personalized learning pathways based on user capabilities",
      "Created real-time accessibility adjustment algorithms",
      "Integrated biometric feedback for comfort optimization",
    ],
    status: "completed" as const,
    image: "/ai-powered-vr-personalization-adaptive-learning-system.jpg",
  },
  {
    id: "8",
    title: "Final Evaluation & Documentation",
    date: "Week 19-20",
    phase: "Completion",
    description:
      "Comprehensive project evaluation, documentation of findings, and preparation of final deliverables including research paper and presentation materials.",
    achievements: [
      "Completed comprehensive project evaluation with quantitative metrics",
      "Authored 25-page research paper on VR accessibility methodologies",
      "Prepared final presentation for academic conference submission",
      "Created open-source accessibility toolkit for VR developers",
    ],
    status: "completed" as const,
    image: "/final-vr-project-evaluation-research-paper-presentation.jpg",
  },
]

export default function FinalProjectPage() {
  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-700">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 animate-in slide-in-from-bottom duration-1000">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Final Capstone Project
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              AccessiVR
              <span className="block text-primary mt-2">Inclusive Virtual Reality Platform</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground text-pretty">
              A groundbreaking accessible VR training platform that breaks down barriers and creates inclusive virtual
              experiences for users of all abilities. The culmination of advanced HCI research and development.
            </p>
          </div>
        </div>
      </section>

      {/* Project Vision */}
      <section className="py-16 bg-muted/20 animate-in slide-in-from-bottom duration-1000 delay-300">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Project Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Creating a virtual reality platform that adapts to users rather than requiring users to adapt to
                technology
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Universal Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed for users with diverse abilities including motor, visual, and cognitive differences
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Adaptive Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered system that learns and adapts to individual user needs and preferences
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Modal Input</h3>
                  <p className="text-sm text-muted-foreground">
                    Voice commands, eye tracking, gesture recognition, and traditional controllers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-24 animate-in slide-in-from-bottom duration-1000 delay-500">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Development Journey</h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive 20-week development process combining rigorous research, innovative design, and
                extensive user validation to create a truly inclusive VR platform.
              </p>
            </div>

            <Timeline items={finalProjectTimelineData} />
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-muted/20 animate-in slide-in-from-bottom duration-1000 delay-700">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Research Impact & Outcomes</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Task Completion Rate</div>
                  <div className="text-xs text-muted-foreground mt-1">Across all ability levels</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Voice Recognition</div>
                  <div className="text-xs text-muted-foreground mt-1">Accuracy rate achieved</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-chart-2 mb-2">20</div>
                  <div className="text-sm text-muted-foreground">User Studies</div>
                  <div className="text-xs text-muted-foreground mt-1">Diverse participant groups</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-chart-4 mb-2">WCAG</div>
                  <div className="text-sm text-muted-foreground">AA Compliance</div>
                  <div className="text-xs text-muted-foreground mt-1">Accessibility standards</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-16 animate-in slide-in-from-bottom duration-1000 delay-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Innovations</h2>

            <div className="space-y-8">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Adaptive Interface System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Developed a revolutionary AI-powered interface that automatically adjusts UI elements, interaction
                    methods, and visual presentation based on real-time analysis of user capabilities and preferences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Real-time Adaptation</Badge>
                    <Badge variant="secondary">User Modeling</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Multi-Modal Interaction Framework</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Created a comprehensive framework supporting simultaneous input from voice commands, eye tracking,
                    hand gestures, and traditional controllers, allowing users to choose their preferred interaction
                    methods.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Voice Recognition</Badge>
                    <Badge variant="secondary">Eye Tracking</Badge>
                    <Badge variant="secondary">Gesture Control</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility Testing Methodology</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Established a comprehensive testing methodology for VR accessibility that has been adopted by other
                    research teams and contributes to emerging standards in inclusive VR design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Research Methodology</Badge>
                    <Badge variant="secondary">Standards Development</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
