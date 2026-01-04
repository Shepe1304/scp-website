"use client";

import React, { useState } from "react";
import { ChevronDown, List, GitBranch } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ViewMode } from "./types";
import { semesterData } from "./mockData";
import { CardView, ListView, TimelineView } from "./EventViews";
import Hero from "@/components/layout/hero";

export default function EventsPage(): React.ReactElement {
  const [selectedSemester, setSelectedSemester] = useState<string>(
    semesterData.find((s) => s.current)?.id || semesterData[0].id
  );
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const currentSemester = semesterData.find((s) => s.id === selectedSemester);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* For fading-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Hero
        title="Events"
        subtitle="Stay updated with our latest contests, workshops, and meetings."
      />      

      {/* Controls Section */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Semester Selector */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-card hover:bg-muted transition-colors min-w-[200px] justify-between"
              >
                <span className="font-medium">{currentSemester?.name}</span>
                {currentSemester?.current && (
                  <span className="font-bold text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                    Now
                  </span>
                )}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-card border rounded-lg shadow-lg overflow-hidden z-10">
                  {semesterData.map((semester) => (
                    <button
                      key={semester.id}
                      onClick={() => {
                        setSelectedSemester(semester.id);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center justify-between"
                    >
                      <span>{semester.name}</span>
                      {semester.current && (
                        <span className="font-bold text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                          Now
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Mode Selector */}
            <div className="flex gap-2 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  viewMode === "timeline"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                <GitBranch className="w-4 h-4" />
                <span className="text-sm font-medium">Timeline</span>
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  viewMode === "card"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
                <span className="text-sm font-medium">Cards</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                <List className="w-4 h-4" />
                <span className="text-sm font-medium">List</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {viewMode === "timeline" && (
            <TimelineView events={currentSemester?.events || []} />
          )}
          {viewMode === "card" && (
            <CardView events={currentSemester?.events || []} />
          )}
          {viewMode === "list" && (
            <ListView events={currentSemester?.events || []} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
