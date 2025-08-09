"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CodeCuraLanding() {
  // refs
  const headerRef = useRef<HTMLElement>(null);
  const announceRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // 상단 공지 배너: 접속 시 항상 표시, X 누르면 그 세션에서만 숨김(새로고침 시 다시 표시)
  const [showAnnounce, setShowAnnounce] = useState(true);

  // 헤더+배너 높이만큼 히어로를 위로 끌어올리고 동일 패딩으로 보정 → 회색 배너 뒤 빈칸 제거
  const [coverOffset, setCoverOffset] = useState(0);
  const recalcOffset = () => {
    const hH = headerRef.current?.getBoundingClientRect().height ?? 0;
    const aH =
      showAnnounce && announceRef.current
        ? announceRef.current.getBoundingClientRect().height
        : 0;
    setCoverOffset(hH + aH);
  };
  useEffect(() => {
    recalcOffset();
    const onResize = () => recalcOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [showAnnounce]);

  // 부드러운 스크롤
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 캐러셀 이동
  const scrollBy = (dx: number) =>
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  // 쿠키 배너
  const [showCookie, setShowCookie] = useState(true);

  // 프로젝트 목록 (p3 포함)
  const projects = [
    {
      id: "p1",
      title: "DNA Transcription Factor Binding Strength – Predictive AI",
      author: "Colin.C",
      when: "May, 2025",
      badge: "Powered by PyTorch",
      image: "/project-1.png",
    },
    {
      id: "p2",
      title: "Monod-Logistic Hybrid Bacterial Culture Simulation",
      author: "Colin.C",
      when: "Aug, 2025",
      badge: "Powered by Python",
      image: "/project-2.png",
    },
    {
      id: "p3",
      title: "Coacervate Fomation Biochemical Experimentation",
      author: "Colin.C, Baist(Biology Club)",
      when: "June, 2025",
      badge: "Supported by Baist",
      image: "/project-3.png",
    },
    {
      id: "p4",
      title: "Alcheimer's Disease with bigdata - Research Paper",
      author: "Colin.C",
      when: "July, 2025",
      badge: "Paper",
      image: "/project-4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* 상단 공지 배너 */}
      {showAnnounce && (
        <div
          ref={announceRef}
          className="relative z-50 w-full bg-gradient-to-r from-[#49808B] via-[#ACCBD0] to-[#7FAAB4] text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
            <p className="mx-auto text-center">
              Watch the latest update from the CodeCura team.
            </p>
            <button
              aria-label="Dismiss"
              onClick={() => setShowAnnounce(false)}
              className="ml-3 shrink-0 rounded-md border border-white/70 px-2 py-1 hover:bg-white/10"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 헤더 */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 w-full bg-black/50 text-white backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/codecura-logo.png"
              alt="CodeCura Logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-2xl font-light tracking-wide">CodeCura</span>
          </div>
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <a
                href="#technology"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("technology");
                }}
                className="hover:underline"
              >
                Technology
              </a>
            </li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#updates" className="hover:underline">Updates</a></li>
            <li>
              <a
                href="/login"
                className="rounded-full border border-white/70 px-3 py-1 hover:bg-white/10"
              >
                Login
              </a>
            </li>
          </ul>
          <button className="md:hidden" aria-label="Open menu">☰</button>
        </nav>
      </header>

      {/* HERO – 배경을 헤더/배너 뒤로 깔아서 빈칸 제거, 텍스트 그림자 제거 */}
      <section
        className="relative isolate"
        style={{
          minHeight: "100svh",
          marginTop: -coverOffset,
          paddingTop: coverOffset,
        }}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/codecura-bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-light leading-tight text-white">CodeCura</h1>
            <p className="mt-2 text-3xl font-light text-white">Biological Pioneers</p>
            <p className="mt-6 max-w-xl leading-relaxed text-white">
              Our technological goal is to develop accessible programs and
              computational tools to improve the quality of human health, while
              exploring new fields of biology. AI developments in biology will
              allow us to advance further.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#technology"
                onClick={(e) => { e.preventDefault(); scrollToId("technology"); }}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                Explore Technology
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
                className="rounded-xl border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY – Carousel (스크롤바 숨김) */}
      <main id="technology" className="bg-[#88B0B6]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Meet our Technology
            </h2>

            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => scrollBy(-480)}
                className="rounded-full border border-white/70 px-3 py-1 text-white hover:bg-white/10"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(480)}
                className="rounded-full border border-white/70 px-3 py-1 text-white hover:bg-white/10"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative">
            {/* 모바일용 상단 버튼 */}
            <div className="mb-3 flex gap-2 md:hidden">
              <button
                onClick={() => scrollBy(-320)}
                className="flex-1 rounded-md border border-white/70 px-3 py-2 text-white hover:bg-white/10"
              >
                Prev
              </button>
              <button
                onClick={() => scrollBy(320)}
                className="flex-1 rounded-md border border-white/70 px-3 py-2 text-white hover:bg-white/10"
              >
                Next
              </button>
            </div>

            {/* >>> 스크롤바 숨김 클래스 추가 */}
            <div
              ref={trackRef}
              className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            >
              {projects.map((p) => (
                <article
                  key={p.id}
                  className="snap-center w-[92%] max-w-[560px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 md:w-[560px]"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 92vw, 560px"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-medium leading-snug">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{p.author}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-700">
                      <span className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-900">
                        {p.badge}
                      </span>
                      <span>
                        Developed in <span className="font-medium">{p.when}</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-neutral-50" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-neutral-500">Company</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="#technology"
                    onClick={(e) => { e.preventDefault(); scrollToId("technology"); }}
                    className="hover:underline"
                  >
                    Technology
                  </a>
                </li>
                <li><a href="#careers" className="hover:underline">Careers</a></li>
                <li><a href="#updates" className="hover:underline">Updates</a></li>
                <li><a href="/login" className="hover:underline">Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-neutral-500">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="mailto:hello@codecura.dev" className="hover:underline">Email Now</a></li>
                <li><a className="hover:underline" href="#">X</a></li>
                <li><a className="hover:underline" href="#">LinkedIn</a></li>
                <li><a className="hover:underline" href="#">Instagram</a></li>
                <li><a className="hover:underline" href="#">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-neutral-500">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:underline" href="#">Patient Registry Privacy Notice</a></li>
                <li><a className="hover:underline" href="#">Privacy Policy</a></li>
                <li><a className="hover:underline" href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t pt-6 text-sm text-neutral-600">
            <div>CodeCura 2025</div>
            <button
              onClick={() => setShowCookie(true)}
              className="rounded-md border border-neutral-300 px-3 py-1 hover:bg-neutral-100"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {showCookie && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <p className="text-sm text-neutral-800">
            This site stores minimal data for functionality. You can change your settings anytime from the footer.
          </p>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => setShowCookie(false)}
              className="rounded-full border border-neutral-900 px-4 py-1.5 text-sm transition hover:bg-neutral-900/5"
            >
              Decline
            </button>
            <button
              onClick={() => setShowCookie(false)}
              className="rounded-full bg-neutral-900 px-4 py-1.5 text-sm text-white transition hover:scale-105 hover:bg-neutral-800"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
