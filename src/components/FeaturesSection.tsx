"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="bg-github-deepblue py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Accelerate performance
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            With GitHub Copilot embedded throughout the platform, you can simplify your toolchain, automate tasks, and improve the developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="GitHub Copilot"
            description="Get AI-powered coding assistance with suggestions for whole lines of code or entire functions right inside your editor."
            icon={
              <svg className="w-10 h-10 text-github-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 7L12 12L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            link="/features/copilot"
          />

          <FeatureCard
            title="GitHub Actions"
            description="Automate your software workflows with powerful CI/CD that builds, tests, and deploys your code right from GitHub."
            icon={
              <svg className="w-10 h-10 text-github-teal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7519 6.75H17.2481C17.6825 6.75 18 7.06749 18 7.5V16.5C18 16.9325 17.6825 17.25 17.2481 17.25H14.7519C14.3175 17.25 14 16.9325 14 16.5V7.5C14 7.06749 14.3175 6.75 14.7519 6.75Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M6.75192 13.5H9.24808C9.68249 13.5 10 13.8175 10 14.25V16.5C10 16.9325 9.68249 17.25 9.24808 17.25H6.75192C6.31751 17.25 6 16.9325 6 16.5V14.25C6 13.8175 6.31751 13.5 6.75192 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M10 15H14" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 12H21" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 12H6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            link="/features/actions"
          />

          <FeatureCard
            title="Advanced Security"
            description="Detect vulnerabilities in your code, prevent leaked secrets, and ensure your software supply chain is secure."
            icon={
              <svg className="w-10 h-10 text-github-magenta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            link="/features/security"
          />

          <FeatureCard
            title="Codespaces"
            description="Create cloud-based development environments with a click, ensuring consistent and easily accessible workspaces."
            icon={
              <svg className="w-10 h-10 text-github-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            link="/features/codespaces"
          />

          <FeatureCard
            title="Issues & Projects"
            description="Plan, track and organize your work with flexible project management tools that integrate with your code."
            icon={
              <svg className="w-10 h-10 text-github-teal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            link="/features/issues"
          />

          <FeatureCard
            title="Pull Requests"
            description="Collaborate on code with easy-to-use code review tools and discussions built into every repository."
            icon={
              <svg className="w-10 h-10 text-github-magenta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L15 12L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9L9 12L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21H5.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 3H5.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            link="/features/pull-requests"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6 text-lg">
            Take your development to the next level with GitHub's powerful platform.
          </p>
          <Button className="github-button-gradient text-white hover:opacity-90 px-8 py-6 text-lg">
            Explore all features
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, link }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardHeader>
        <div className="mb-3">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400 mb-4">{description}</CardDescription>
        <Button variant="link" className="text-github-purple hover:text-github-purple/80 p-0" asChild>
          <a href={link}>Learn more &rarr;</a>
        </Button>
      </CardContent>
    </Card>
  );
}
