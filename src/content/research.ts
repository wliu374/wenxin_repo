import type { ResearchArea } from "./types";

/** Research areas shown in the Research section. */
export const researchAreas: ResearchArea[] = [
  {
    id: "dart",
    title: "DART",
    expansion:
      "Drone-based Autonomous, Real-time, and Targeted Sense-and-Spray",
    summary:
      "A ROS-based framework on an NVIDIA Jetson Orin for real-time weed detection and automated spot spraying.",
    description:
      "DART links image capture, a lightweight multi-class semantic segmentation model for real-time weed detection, flight control, and automated spot spraying. Site-specific weed management in soybean is the case study, with field tests of end-to-end performance.",
    skills: [
      "Computer vision",
      "Deep learning",
      "ROS",
      "Flight-controller integration for spray drones",
    ],
  },
];
