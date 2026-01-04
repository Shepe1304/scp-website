import { useEffect, useRef, useState } from "react";
import { CardViewProps, ListViewProps, TimelineViewProps } from "./types";
import { getEventTypeColor } from "@/components/helpers/EventsSectionHelpers";
import { Calendar, Clock, MapPin } from "lucide-react";

export const TimelineView: React.FC<TimelineViewProps> = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = Number(entry.target.getAttribute('data-event-id'));
            setVisibleEvents(prev => new Set(prev).add(eventId));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [events]);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
      
      <div className="space-y-8">
        {events.map((event, index) => {
          const color = getEventTypeColor(event.type);
          const isVisible = visibleEvents.has(event.id);
          
          return (
            <div 
              key={event.id}
              ref={(el) => {
                if (el) eventRefs.current.set(event.id, el);
              }}
              data-event-id={event.id}
              className="relative pl-20 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg group-hover:scale-125 transition-transform" 
                   style={{ backgroundColor: `hsl(var(--${color}))` }}></div>
              
              {/* Event card */}
              <div className={`p-6 rounded-xl border-2 bg-card hover:bg-${color}/5 transition-all hover:border-${color}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-xl text-foreground">{event.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CardView: React.FC<CardViewProps> = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = Number(entry.target.getAttribute('data-event-id'));
            setVisibleEvents(prev => new Set(prev).add(eventId));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [events]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const color = getEventTypeColor(event.type);
        const isVisible = visibleEvents.has(event.id);
        
        return (
          <div 
            key={event.id}
            ref={(el) => {
              if (el) eventRefs.current.set(event.id, el);
            }}
            data-event-id={event.id}
            className={`p-6 rounded-xl border-2 bg-card hover:bg-${color}/5 transition-all hover:border-${color} hover:scale-105`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
            }}
          >
            <h3 className="font-bold text-lg mb-2 text-foreground">{event.title}</h3>
            <div className="space-y-1 text-sm text-foreground/70 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {event.time}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">{event.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export const ListView: React.FC<ListViewProps> = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = Number(entry.target.getAttribute('data-event-id'));
            setVisibleEvents(prev => new Set(prev).add(eventId));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [events]);

  return (
    <div className="space-y-4">
      {events.map((event, index) => {
        const color = getEventTypeColor(event.type);
        const isVisible = visibleEvents.has(event.id);
        
        return (
          <div 
            key={event.id}
            ref={(el) => {
              if (el) eventRefs.current.set(event.id, el);
            }}
            data-event-id={event.id}
            className={`p-4 rounded-lg border bg-card hover:bg-${color}/5 transition-all hover:border-${color}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold truncate text-foreground">{event.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};