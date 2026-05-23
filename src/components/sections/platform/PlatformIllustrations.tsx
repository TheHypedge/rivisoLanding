import ContentPipelinesIllustration from "./ContentPipelinesIllustration";
import ResearchAgentsIllustration from "./ResearchAgentsIllustration";
import RivisoIQIllustration from "./RivisoIQIllustration";

interface IllustrationProps {
  className?: string;
}

/** Research Agents — Figma workflow diagram */
export function AgentsIllustration({ className }: IllustrationProps) {
  return <ResearchAgentsIllustration className={className} />;
}

/** Content Pipelines — Figma workflow diagram */
export function PipelinesIllustration({ className }: IllustrationProps) {
  return <ContentPipelinesIllustration className={className} />;
}

/** Riviso IQ — Figma knowledge hub diagram */
export function ContextIllustration({ className }: IllustrationProps) {
  return <RivisoIQIllustration className={className} />;
}
