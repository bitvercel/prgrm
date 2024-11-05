import { ProjectDetails } from "@/components/project/project-details";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// This is required for static site generation with `output: export`
export function generateStaticParams() {
  // In a real app, you would fetch this from your API/database
  // For now, we'll pre-render a few example project pages
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // In a real app, you would fetch this data from an API
  const project = {
    id: params.id,
    title: "Tech Empowerment for At-Risk Girls",
    description: "A program aimed at empowering girls through technical training and education to combat human trafficking and create opportunities for a better future.",
  };

  return <ProjectDetails project={project} />;
}