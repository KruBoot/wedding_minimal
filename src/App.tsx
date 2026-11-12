import { AnimatePresence, MotionConfig } from "motion/react";
import { useState } from "react";
import { Details } from "./components/Details/Details";
import { Closing } from "./components/Footer/Closing";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { Invitation } from "./components/Invitation/Invitation";
import { Location } from "./components/Location/Location";
import { BottomNav } from "./components/Navigation/BottomNav";
import { SECTION_IDS } from "./components/Navigation/navItems";
import { TopNav } from "./components/Navigation/TopNav";
import { Opening } from "./components/Opening/Opening";
import { QRCodes } from "./components/QRCode/QRCodes";
import { Schedule } from "./components/Schedule/Schedule";
import { wedding } from "./config/wedding";
import { useActiveSection } from "./hooks/useActiveSection";
import { useLockBodyScroll } from "./hooks/useLockBodyScroll";

export default function App() {
  const [opened, setOpened] = useState(!wedding.showOpening);
  useLockBodyScroll(!opened);
  const active = useActiveSection(SECTION_IDS);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!opened && <Opening key="opening" onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      <div aria-hidden={!opened}>
        <TopNav active={active} />
        <main id="main">
          <Hero ready={opened} />
          <Gallery />
          <Invitation />
          <Details />
          <Schedule />
          <Location />
          <QRCodes />
        </main>
        <Closing />
        <BottomNav active={active} />
      </div>
    </MotionConfig>
  );
}
