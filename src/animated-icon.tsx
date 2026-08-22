"use client";

import type { ComponentType, HTMLAttributes, ReactNode, Ref } from "react";
import { createContext, createElement, useContext, useEffect, useRef } from "react";

import {
  Activity,
  AlignLeft,
  Archive,
  ArrowRight,
  ArrowUp,
  AtSign,
  Bell,
  Bold,
  BookText,
  Brain,
  Building2,
  ChartLine,
  CircleDashed,
  ChartNoAxesColumnIncreasing,
  ChevronsUpDown,
  CircleCheck,
  CircleHelp,
  Clock,
  Cloud,
  CloudCog,
  Compass,
  CloudUpload,
  Copy,
  CopyPlus,
  CornerDownLeft,
  CreditCard,
  Download,
  FileText,
  Fingerprint,
  FlaskConical,
  GalleryVerticalEnd,
  Gauge,
  GripVertical,
  History,
  Italic,
  Key,
  LayoutGrid,
  LifeBuoy,
  Lock,
  MessageCircle,
  MessageSquare,
  MessageSquareDashed,
  Mic,
  Monitor,
  MousePointerClick,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  PenTool,
  Phone,
  PhoneCall,
  Plane,
  PlugZap,
  Plus,
  RefreshCw,
  Rocket,
  RotateCcw,
  RotateCw,
  Route,
  Search,
  Server,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquarePen,
  Sun,
  Trash2,
  TrendingUp,
  Unplug,
  Upload,
  User,
  Users,
  Webhook,
  Workflow,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

import { ActivityIcon } from "./icons/activity";
import { AirplaneIcon } from "./icons/airplane";
import { AlignLeftIcon } from "./icons/align-left";
import { ArchiveIcon } from "./icons/archive";
import { ArrowRightIcon } from "./icons/arrow-right";
import { ArrowUpIcon } from "./icons/arrow-up";
import { AtSignIcon } from "./icons/at-sign";
import { BellIcon } from "./icons/bell";
import { BoldIcon } from "./icons/bold";
import { BookTextIcon } from "./icons/book-text";
import { BrainIcon } from "./icons/brain";
import { BuildingOffice2Icon } from "./icons/building-office-2";
import { ChartLineIcon } from "./icons/chart-line";
import { ChartNoAxesColumnIncreasingIcon } from "./icons/chart-no-axes-column-increasing";
import { CircleCheckIcon } from "./icons/circle-check";
import { CircleDashedIcon } from "./icons/circle-dashed";
import { CircleHelpIcon } from "./icons/circle-help";
import { ClockIcon } from "./icons/clock";
import { CloudBackupIcon } from "./icons/cloud-backup";
import { CloudCogIcon } from "./icons/cloud-cog";
import { CloudUploadIcon } from "./icons/cloud-upload";
import { CompassIcon } from "./icons/compass";
import { ConnectIcon } from "./icons/connect";
import { CursorClickIcon } from "./icons/cursor-click";
import { ChevronsUpDownIcon } from "./icons/chevrons-up-down";
import { CopyIcon } from "./icons/copy";
import { CornerDownLeftIcon } from "./icons/corner-down-left";
import { CreditCardIcon } from "./icons/credit-card";
import { DeleteIcon } from "./icons/delete";
import { DocumentDuplicateIcon } from "./icons/document-duplicate";
import { DownloadIcon } from "./icons/download";
import { FileTextIcon } from "./icons/file-text";
import { FingerprintIcon } from "./icons/fingerprint";
import { FlaskIcon } from "./icons/flask";
import { GalleryVerticalEndIcon } from "./icons/gallery-vertical-end";
import { GaugeIcon } from "./icons/gauge";
import { GripVerticalIcon } from "./icons/grip-vertical";
import { HistoryIcon } from "./icons/history";
import { ItalicIcon } from "./icons/italic";
import { KeyIcon } from "./icons/key";
import { LayoutGridIcon } from "./icons/layout-grid";
import { LifebuoyIcon } from "./icons/lifebuoy";
import { LockIcon } from "./icons/lock";
import { MessageCircleIcon } from "./icons/message-circle";
import { MessageSquareIcon } from "./icons/message-square";
import { MessageSquareDashedIcon } from "./icons/message-square-dashed";
import { MicIcon } from "./icons/mic";
import { ComputerDesktopIcon } from "./icons/computer-desktop";
import { MoonIcon } from "./icons/moon";
import { PanelLeftCloseIcon } from "./icons/panel-left-close";
import { PanelLeftOpenIcon } from "./icons/panel-left-open";
import { PenToolIcon } from "./icons/pen-tool";
import { PhoneIcon } from "./icons/phone";
import { PhoneCallIcon } from "./icons/phone-call";
import { PlugZapIcon } from "./icons/plug-zap";
import { PlusIcon } from "./icons/plus";
import { RefreshCWIcon } from "./icons/refresh-cw";
import { RocketIcon } from "./icons/rocket";
import { RotateCCWIcon } from "./icons/rotate-ccw";
import { RotateCWIcon } from "./icons/rotate-cw";
import { RouteIcon } from "./icons/route";
import { SearchIcon } from "./icons/search";
import { ServerIcon } from "./icons/server";
import { SettingsIcon } from "./icons/settings";
import { ShieldCheckIcon } from "./icons/shield-check";
import { SlidersHorizontalIcon } from "./icons/sliders-horizontal";
import { SparklesIcon } from "./icons/sparkles";
import { SquarePenIcon } from "./icons/square-pen";
import { SunIcon } from "./icons/sun";
import { TrendingUpIcon } from "./icons/trending-up";
import { UploadIcon } from "./icons/upload";
import { UserIcon } from "./icons/user";
import { UsersIcon } from "./icons/users";
import { WebhookIcon } from "./icons/webhook";
import { WorkflowIcon } from "./icons/workflow";
import { WrenchIcon } from "./icons/wrench";
import { XIcon } from "./icons/x";
import { cn } from "./cn";

/**
 * Imperative handle every `@lucide-animated` icon exposes. Providing a ref
 * flips the icon into "controlled" mode: its own hover listeners go quiet and
 * we drive the animation ourselves from the nearest interactive ancestor.
 */
export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

type AnimatedIconComponent = ComponentType<
  HTMLAttributes<HTMLDivElement> & {
    size?: number;
    ref?: Ref<AnimatedIconHandle>;
  }
>;

/**
 * lucide-react icon → its `@lucide-animated` counterpart. Keyed by the
 * component reference itself (not display name, lucide aliases some, e.g.
 * `CircleHelp` renders as `CircleQuestionMark`). Only icons with an animated
 * equivalent live here; everything else falls back to the static lucide icon.
 * Extend this as more animated icons are installed.
 */
const ANIMATED = new Map<LucideIcon, AnimatedIconComponent>([
  [Activity, ActivityIcon],
  [AlignLeft, AlignLeftIcon],
  [Archive, ArchiveIcon],
  [ArrowRight, ArrowRightIcon],
  [ArrowUp, ArrowUpIcon],
  [AtSign, AtSignIcon],
  [Bell, BellIcon],
  [Bold, BoldIcon],
  [BookText, BookTextIcon],
  [Brain, BrainIcon],
  [Building2, BuildingOffice2Icon],
  [ChartLine, ChartLineIcon],
  [ChartNoAxesColumnIncreasing, ChartNoAxesColumnIncreasingIcon],
  [ChevronsUpDown, ChevronsUpDownIcon],
  [CircleCheck, CircleCheckIcon],
  [CircleDashed, CircleDashedIcon],
  [Compass, CompassIcon],
  [Cloud, CloudBackupIcon],
  [CloudCog, CloudCogIcon],
  [CircleHelp, CircleHelpIcon],
  [Clock, ClockIcon],
  [CloudUpload, CloudUploadIcon],
  [Copy, CopyIcon],
  [CopyPlus, DocumentDuplicateIcon],
  [CornerDownLeft, CornerDownLeftIcon],
  [CreditCard, CreditCardIcon],
  [Download, DownloadIcon],
  [FileText, FileTextIcon],
  [Fingerprint, FingerprintIcon],
  [FlaskConical, FlaskIcon],
  [GalleryVerticalEnd, GalleryVerticalEndIcon],
  [Gauge, GaugeIcon],
  [GripVertical, GripVerticalIcon],
  [Key, KeyIcon],
  [History, HistoryIcon],
  [Italic, ItalicIcon],
  [LayoutGrid, LayoutGridIcon],
  [LifeBuoy, LifebuoyIcon],
  [Lock, LockIcon],
  [MessageCircle, MessageCircleIcon],
  [MessageSquare, MessageSquareIcon],
  [MessageSquareDashed, MessageSquareDashedIcon],
  [Mic, MicIcon],
  [Monitor, ComputerDesktopIcon],
  [Moon, MoonIcon],
  [MousePointerClick, CursorClickIcon],
  [PanelLeftClose, PanelLeftCloseIcon],
  [PanelLeftOpen, PanelLeftOpenIcon],
  [PenTool, PenToolIcon],
  [Phone, PhoneIcon],
  [Plane, AirplaneIcon],
  [PhoneCall, PhoneCallIcon],
  [PlugZap, PlugZapIcon],
  [Plus, PlusIcon],
  [RefreshCw, RefreshCWIcon],
  [Rocket, RocketIcon],
  [RotateCcw, RotateCCWIcon],
  [RotateCw, RotateCWIcon],
  [Route, RouteIcon],
  [Search, SearchIcon],
  [Server, ServerIcon],
  [Settings, SettingsIcon],
  [ShieldCheck, ShieldCheckIcon],
  [SlidersHorizontal, SlidersHorizontalIcon],
  [Sparkles, SparklesIcon],
  [SquarePen, SquarePenIcon],
  [Sun, SunIcon],
  [Trash2, DeleteIcon],
  [TrendingUp, TrendingUpIcon],
  [Unplug, ConnectIcon],
  [Upload, UploadIcon],
  [User, UserIcon],
  [Users, UsersIcon],
  [Webhook, WebhookIcon],
  [Workflow, WorkflowIcon],
  [Wrench, WrenchIcon],
  [X, XIcon],
]);

const HOST_SELECTOR =
  "a,button,[role='button'],[role='menuitem'],[data-animate-group]";

/** Small lead-in before a hovered icon starts animating. */
const START_DELAY_MS = 135;

/**
 * Whether icons in this subtree may animate. Defaults to `true` (the shell,
 * sidebar, top bar, menus). The central page content wraps itself in
 * `<StaticIcons>` so its icons render as the plain, static lucide glyphs.
 */
const AnimateIconsContext = createContext(true);

/** Renders its subtree's animated icons as static lucide glyphs. */
export function StaticIcons({ children }: { children: ReactNode }) {
  return (
    <AnimateIconsContext.Provider value={false}>
      {children}
    </AnimateIconsContext.Provider>
  );
}

/**
 * Re-enables animation inside a `<StaticIcons>` subtree, for chrome that
 * happens to be *rendered* by a page rather than by the shell (the Settings
 * dialog's tab rail lives under `(admin)/settings/layout.tsx`, so it inherits
 * the page's static context even though it reads as sidebar navigation).
 */
export function AnimateIcons({ children }: { children: ReactNode }) {
  return (
    <AnimateIconsContext.Provider value>{children}</AnimateIconsContext.Provider>
  );
}

interface AnimatedIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** The lucide-react icon; auto-upgraded to its animated twin when available. */
  icon: LucideIcon;
  /** Pixel size passed to both the animated and static renderers. */
  size?: number;
  /** Classes for the icon glyph itself (color, margins), not the wrapper. */
  iconClassName?: string;
  /**
   * When to play: `"hover"` (default) drives from the nearest interactive
   * ancestor so hovering the whole control animates; `"none"` never auto-plays.
   */
  animateOn?: "hover" | "none";
}

/**
 * Drop-in replacement for a lucide-react icon that animates on hover when an
 * animated equivalent exists. Usage mirrors lucide: pass the icon component and
 * a `size`; keep color/margin utilities in `iconClassName`. Sizing goes through
 * the `size` prop (animated icons size their SVG by attribute, not by class).
 */
export function AnimatedIcon({
  icon: Icon,
  size = 16,
  iconClassName,
  animateOn = "hover",
  className,
  ...spanProps
}: AnimatedIconProps) {
  const handleRef = useRef<AnimatedIconHandle>(null);
  const hostRef = useRef<HTMLSpanElement>(null);
  const animate = useContext(AnimateIconsContext);
  const Animated = animate ? ANIMATED.get(Icon) : undefined;

  useEffect(() => {
    if (!Animated || animateOn !== "hover") return;
    // Respect reduced-motion: leave the icon static (no listeners, no work).
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const span = hostRef.current;
    if (!span) return;
    const host = span.closest(HOST_SELECTOR) ?? span;
    // Tiny delay before playing so the animation feels intentional rather than
    // firing the instant the pointer grazes the control. Cancelled on leave.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      timer = setTimeout(() => handleRef.current?.startAnimation(), START_DELAY_MS);
    };
    const stop = () => {
      clearTimeout(timer);
      handleRef.current?.stopAnimation();
    };
    host.addEventListener("mouseenter", start);
    host.addEventListener("mouseleave", stop);
    return () => {
      clearTimeout(timer);
      host.removeEventListener("mouseenter", start);
      host.removeEventListener("mouseleave", stop);
    };
  }, [Animated, animateOn]);

  if (!Animated) {
    return <Icon size={size} className={cn(className, iconClassName)} />;
  }

  return (
    <span ref={hostRef} className={cn("inline-flex", className)} {...spanProps}>
      {createElement(Animated, {
        ref: handleRef,
        size,
        className: cn(iconClassName),
      })}
    </span>
  );
}
