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
  AArrowDown,
  AArrowUp,
  Accessibility,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockPlus,
  AlarmSmoke,
  AlignCenter,
  AlignRight,
  Ambulance,
  Angry,
  Annoyed,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowDownZA,
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Atom,
  AudioLines,
  Axe,
  BadgeAlert,
  BadgePercent,
  Ban,
  Banana,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryPlus,
  BatteryWarning,
  BellElectric,
  BicepsFlexed,
  Binary,
  Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bone,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  Bot,
  Box,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck,
  CalendarCheck2,
  CalendarCog,
  CalendarDays,
  Cast,
  Cctv,
  ChartBarDecreasing,
  ChartBarIncreasing,
  ChartColumnDecreasing,
  ChartColumnIncreasing,
  ChartNoAxesColumnDecreasing,
  ChartPie,
  ChartScatter,
  ChartSpline,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDownUp,
  ChevronsLeftRight,
  ChevronsRightLeft,
  Chrome,
  Cigarette,
  CigaretteOff,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CircleDollarSign,
  CircleGauge,
  ClipboardCheck,
  CloudDownload,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  Coffee,
  Cog,
  ConciergeBell,
  Construction,
  Contrast,
  CookingPot,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CupSoda,
  DatabaseBackup,
  Disc3,
  DollarSign,
  Dribbble,
  Droplet,
  Drum,
  Earth,
  Euro,
  EvCharger,
  Expand,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  Fan,
  Feather,
  Figma,
  FileChartLine,
  FileCheck,
  FileCheck2,
  FileCog,
  FilePenLine,
  FileStack,
  FishSymbol,
  Flame,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderCode,
  FolderCog,
  FolderDot,
  FolderDown,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpen,
  FolderOutput,
  FolderPlus,
  FolderRoot,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folders,
  Frame,
  Frown,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  Gavel,
  GeorgianLari,
  GitBranch,
  GitCommitHorizontal,
  GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitFork,
  GitGraph,
  GitMerge,
  GitPullRequest,
  GitPullRequestClosed,
  GitPullRequestCreate,
  Github,
  Gitlab,
  GraduationCap,
  Grip,
  GripHorizontal,
  Hammer,
  Hand,
  HandCoins,
  HandFist,
  HandGrab,
  HandHeart,
  HandHelping,
  HandMetal,
  HardDriveDownload,
  HardDriveUpload,
  HatGlasses,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  Hourglass,
  IdCard,
  IndianRupee,
  Instagram,
  JapaneseYen,
  KeySquare,
  Keyboard,
  Languages,
  LaptopMinimalCheck,
  Laugh,
  Layers,
  LayoutPanelTop,
  Leaf,
  LeafyGreen,
  Link,
  Link2,
  Linkedin,
  Loader,
  LoaderCircle,
  LoaderPinwheel,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  MailCheck,
  Mailbox,
  MapPin,
  MapPinCheck,
  MapPinCheckInside,
  MapPinHouse,
  MapPinMinus,
  MapPinMinusInside,
  MapPinOff,
  MapPinPlus,
  MapPinPlusInside,
  MapPinXInside,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircleDashed,
  MessageCircleMore,
  MessageCirclePlus,
  MessageCircleX,
  MessageSquareMore,
  MessageSquarePlus,
  MessageSquareX,
  MicOff,
  Minimize,
  MonitorCheck,
  MonitorCog,
  Nfc,
  Palette,
  PanelRightOpen,
  PartyPopper,
  Pause,
  PhilippinePeso,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  Pickaxe,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PoundSterling,
  Projector,
  Rabbit,
  Radio,
  RadioTower,
  Receipt,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptText,
  ReceiptTurkishLira,
  Redo,
  RedoDot,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCwOff,
  RockingChair,
  RollerCoaster,
  Router,
  RussianRuble,
  SatelliteDish,
  SaudiRiyal,
  ScanFace,
  ScanText,
  Send,
  ServerCog,
  ServerCrash,
  Ship,
  ShipWheel,
  ShowerHead,
  Shredder,
  Shrink,
  SmartphoneCharging,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snowflake,
  Soup,
  SprayCan,
  SquareActivity,
  SquareArrowDown,
  SquareArrowLeft,
  SquareArrowRight,
  SquareArrowUp,
  SquareChevronDown,
  SquareChevronLeft,
  SquareChevronRight,
  SquareChevronUp,
  SquareStack,
  Stamp,
  Stethoscope,
  SunDim,
  SunMedium,
  SunMoon,
  Sunset,
  SwissFranc,
  SwitchCamera,
  Syringe,
  Telescope,
  Terminal,
  Thermometer,
  Ticket,
  Timer,
  Tornado,
  TrainTrack,
  TreeDeciduous,
  TreePine,
  TrendingDown,
  TrendingUpDown,
  Truck,
  TurkishLira,
  Twitch,
  Twitter,
  Underline,
  Undo,
  UndoDot,
  UserCheck,
  UserPlus,
  UserRoundCheck,
  UserRoundCog,
  UserRoundPlus,
  UsersRound,
  Vibrate,
  Volume,
  Wallet,
  WashingMachine,
  Waves,
  WavesLadder,
  Waypoints,
  Wifi,
  WifiCog,
  WifiLow,
  WifiPen,
  WifiSync,
  Wind,
  WindArrowDown,
  Youtube,
  Zap,
  ZapOff,
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
import { AArrowDownIcon } from "./icons/a-arrow-down";
import { AArrowUpIcon } from "./icons/a-arrow-up";
import { AccessibilityIcon } from "./icons/accessibility";
import { AirVentIcon } from "./icons/air-vent";
import { AirplayIcon } from "./icons/airplay";
import { AlarmClockIcon } from "./icons/alarm-clock";
import { AlarmClockCheckIcon } from "./icons/alarm-clock-check";
import { AlarmClockMinusIcon } from "./icons/alarm-clock-minus";
import { AlarmClockPlusIcon } from "./icons/alarm-clock-plus";
import { AlarmSmokeIcon } from "./icons/alarm-smoke";
import { AlignCenterIcon } from "./icons/align-center";
import { AlignRightIcon } from "./icons/align-right";
import { AmbulanceIcon } from "./icons/ambulance";
import { AngryIcon } from "./icons/angry";
import { AnnoyedIcon } from "./icons/annoyed";
import { ArrowBigDownIcon } from "./icons/arrow-big-down";
import { ArrowBigDownDashIcon } from "./icons/arrow-big-down-dash";
import { ArrowBigLeftIcon } from "./icons/arrow-big-left";
import { ArrowBigLeftDashIcon } from "./icons/arrow-big-left-dash";
import { ArrowBigRightIcon } from "./icons/arrow-big-right";
import { ArrowBigRightDashIcon } from "./icons/arrow-big-right-dash";
import { ArrowBigUpIcon } from "./icons/arrow-big-up";
import { ArrowBigUpDashIcon } from "./icons/arrow-big-up-dash";
import { ArrowDownIcon } from "./icons/arrow-down";
import { ArrowDown01Icon } from "./icons/arrow-down-0-1";
import { ArrowDown10Icon } from "./icons/arrow-down-1-0";
import { ArrowDownAZIcon } from "./icons/arrow-down-a-z";
import { ArrowDownLeftIcon } from "./icons/arrow-down-left";
import { ArrowDownRightIcon } from "./icons/arrow-down-right";
import { ArrowDownZAIcon } from "./icons/arrow-down-z-a";
import { ArrowLeftIcon } from "./icons/arrow-left";
import { ArrowUpLeftIcon } from "./icons/arrow-up-left";
import { ArrowUpRightIcon } from "./icons/arrow-up-right";
import { AtomIcon } from "./icons/atom";
import { AudioLinesIcon } from "./icons/audio-lines";
import { AxeIcon } from "./icons/axe";
import { BadgeAlertIcon } from "./icons/badge-alert";
import { BadgePercentIcon } from "./icons/badge-percent";
import { BanIcon } from "./icons/ban";
import { BananaIcon } from "./icons/banana";
import { BatteryIcon } from "./icons/battery";
import { BatteryChargingIcon } from "./icons/battery-charging";
import { BatteryFullIcon } from "./icons/battery-full";
import { BatteryLowIcon } from "./icons/battery-low";
import { BatteryMediumIcon } from "./icons/battery-medium";
import { BatteryPlusIcon } from "./icons/battery-plus";
import { BatteryWarningIcon } from "./icons/battery-warning";
import { BellElectricIcon } from "./icons/bell-electric";
import { BicepsFlexedIcon } from "./icons/biceps-flexed";
import { BinaryIcon } from "./icons/binary";
import { BlocksIcon } from "./icons/blocks";
import { BluetoothIcon } from "./icons/bluetooth";
import { BluetoothConnectedIcon } from "./icons/bluetooth-connected";
import { BluetoothOffIcon } from "./icons/bluetooth-off";
import { BluetoothSearchingIcon } from "./icons/bluetooth-searching";
import { BoneIcon } from "./icons/bone";
import { BookmarkIcon } from "./icons/bookmark";
import { BookmarkCheckIcon } from "./icons/bookmark-check";
import { BookmarkMinusIcon } from "./icons/bookmark-minus";
import { BookmarkPlusIcon } from "./icons/bookmark-plus";
import { BookmarkXIcon } from "./icons/bookmark-x";
import { BotIcon } from "./icons/bot";
import { BoxIcon } from "./icons/box";
import { BoxesIcon } from "./icons/boxes";
import { BriefcaseBusinessIcon } from "./icons/briefcase-business";
import { CalendarCheckIcon } from "./icons/calendar-check";
import { CalendarCheck2Icon } from "./icons/calendar-check-2";
import { CalendarCogIcon } from "./icons/calendar-cog";
import { CalendarDaysIcon } from "./icons/calendar-days";
import { CastIcon } from "./icons/cast";
import { CctvIcon } from "./icons/cctv";
import { ChartBarDecreasingIcon } from "./icons/chart-bar-decreasing";
import { ChartBarIncreasingIcon } from "./icons/chart-bar-increasing";
import { ChartColumnDecreasingIcon } from "./icons/chart-column-decreasing";
import { ChartColumnIncreasingIcon } from "./icons/chart-column-increasing";
import { ChartNoAxesColumnDecreasingIcon } from "./icons/chart-no-axes-column-decreasing";
import { ChartPieIcon } from "./icons/chart-pie";
import { ChartScatterIcon } from "./icons/chart-scatter";
import { ChartSplineIcon } from "./icons/chart-spline";
import { CheckIcon } from "./icons/check";
import { CheckCheckIcon } from "./icons/check-check";
import { ChevronDownIcon } from "./icons/chevron-down";
import { ChevronFirstIcon } from "./icons/chevron-first";
import { ChevronLeftIcon } from "./icons/chevron-left";
import { ChevronRightIcon } from "./icons/chevron-right";
import { ChevronUpIcon } from "./icons/chevron-up";
import { ChevronsDownUpIcon } from "./icons/chevrons-down-up";
import { ChevronsLeftRightIcon } from "./icons/chevrons-left-right";
import { ChevronsRightLeftIcon } from "./icons/chevrons-right-left";
import { ChromeIcon } from "./icons/chrome";
import { CigaretteIcon } from "./icons/cigarette";
import { CigaretteOffIcon } from "./icons/cigarette-off";
import { CircleChevronDownIcon } from "./icons/circle-chevron-down";
import { CircleChevronLeftIcon } from "./icons/circle-chevron-left";
import { CircleChevronRightIcon } from "./icons/circle-chevron-right";
import { CircleChevronUpIcon } from "./icons/circle-chevron-up";
import { CircleDollarSignIcon } from "./icons/circle-dollar-sign";
import { CircleGaugeIcon } from "./icons/circle-gauge";
import { ClipboardCheckIcon } from "./icons/clipboard-check";
import { CloudDownloadIcon } from "./icons/cloud-download";
import { CloudLightningIcon } from "./icons/cloud-lightning";
import { CloudRainIcon } from "./icons/cloud-rain";
import { CloudRainWindIcon } from "./icons/cloud-rain-wind";
import { CloudSnowIcon } from "./icons/cloud-snow";
import { CloudSunIcon } from "./icons/cloud-sun";
import { CoffeeIcon } from "./icons/coffee";
import { CogIcon } from "./icons/cog";
import { ConciergeBellIcon } from "./icons/concierge-bell";
import { ConstructionIcon } from "./icons/construction";
import { ContrastIcon } from "./icons/contrast";
import { CookingPotIcon } from "./icons/cooking-pot";
import { CornerDownRightIcon } from "./icons/corner-down-right";
import { CornerLeftDownIcon } from "./icons/corner-left-down";
import { CornerLeftUpIcon } from "./icons/corner-left-up";
import { CornerRightDownIcon } from "./icons/corner-right-down";
import { CornerRightUpIcon } from "./icons/corner-right-up";
import { CornerUpLeftIcon } from "./icons/corner-up-left";
import { CornerUpRightIcon } from "./icons/corner-up-right";
import { CpuIcon } from "./icons/cpu";
import { CupSodaIcon } from "./icons/cup-soda";
import { DatabaseBackupIcon } from "./icons/database-backup";
import { Disc3Icon } from "./icons/disc-3";
import { DollarSignIcon } from "./icons/dollar-sign";
import { DribbbleIcon } from "./icons/dribbble";
import { DropletIcon } from "./icons/droplet";
import { DrumIcon } from "./icons/drum";
import { EarthIcon } from "./icons/earth";
import { EuroIcon } from "./icons/euro";
import { EvChargerIcon } from "./icons/ev-charger";
import { ExpandIcon } from "./icons/expand";
import { ExternalLinkIcon } from "./icons/external-link";
import { EyeIcon } from "./icons/eye";
import { EyeOffIcon } from "./icons/eye-off";
import { FacebookIcon } from "./icons/facebook";
import { FanIcon } from "./icons/fan";
import { FeatherIcon } from "./icons/feather";
import { FigmaIcon } from "./icons/figma";
import { FileChartLineIcon } from "./icons/file-chart-line";
import { FileCheckIcon } from "./icons/file-check";
import { FileCheck2Icon } from "./icons/file-check-2";
import { FileCogIcon } from "./icons/file-cog";
import { FilePenLineIcon } from "./icons/file-pen-line";
import { FileStackIcon } from "./icons/file-stack";
import { FishSymbolIcon } from "./icons/fish-symbol";
import { FlameIcon } from "./icons/flame";
import { FolderArchiveIcon } from "./icons/folder-archive";
import { FolderCheckIcon } from "./icons/folder-check";
import { FolderClockIcon } from "./icons/folder-clock";
import { FolderCodeIcon } from "./icons/folder-code";
import { FolderCogIcon } from "./icons/folder-cog";
import { FolderDotIcon } from "./icons/folder-dot";
import { FolderDownIcon } from "./icons/folder-down";
import { FolderGitIcon } from "./icons/folder-git";
import { FolderGit2Icon } from "./icons/folder-git-2";
import { FolderHeartIcon } from "./icons/folder-heart";
import { FolderInputIcon } from "./icons/folder-input";
import { FolderKanbanIcon } from "./icons/folder-kanban";
import { FolderKeyIcon } from "./icons/folder-key";
import { FolderLockIcon } from "./icons/folder-lock";
import { FolderMinusIcon } from "./icons/folder-minus";
import { FolderOpenIcon } from "./icons/folder-open";
import { FolderOutputIcon } from "./icons/folder-output";
import { FolderPlusIcon } from "./icons/folder-plus";
import { FolderRootIcon } from "./icons/folder-root";
import { FolderSyncIcon } from "./icons/folder-sync";
import { FolderTreeIcon } from "./icons/folder-tree";
import { FolderUpIcon } from "./icons/folder-up";
import { FolderXIcon } from "./icons/folder-x";
import { FoldersIcon } from "./icons/folders";
import { FrameIcon } from "./icons/frame";
import { FrownIcon } from "./icons/frown";
import { GalleryHorizontalEndIcon } from "./icons/gallery-horizontal-end";
import { GalleryThumbnailsIcon } from "./icons/gallery-thumbnails";
import { GavelIcon } from "./icons/gavel";
import { GeorgianLariIcon } from "./icons/georgian-lari";
import { GitBranchIcon } from "./icons/git-branch";
import { GitCommitHorizontalIcon } from "./icons/git-commit-horizontal";
import { GitCommitVerticalIcon } from "./icons/git-commit-vertical";
import { GitCompareIcon } from "./icons/git-compare";
import { GitCompareArrowsIcon } from "./icons/git-compare-arrows";
import { GitForkIcon } from "./icons/git-fork";
import { GitGraphIcon } from "./icons/git-graph";
import { GitMergeIcon } from "./icons/git-merge";
import { GitPullRequestIcon } from "./icons/git-pull-request";
import { GitPullRequestClosedIcon } from "./icons/git-pull-request-closed";
import { GitPullRequestCreateIcon } from "./icons/git-pull-request-create";
import { GithubIcon } from "./icons/github";
import { GitlabIcon } from "./icons/gitlab";
import { GraduationCapIcon } from "./icons/graduation-cap";
import { GripIcon } from "./icons/grip";
import { GripHorizontalIcon } from "./icons/grip-horizontal";
import { HammerIcon } from "./icons/hammer";
import { HandIcon } from "./icons/hand";
import { HandCoinsIcon } from "./icons/hand-coins";
import { HandFistIcon } from "./icons/hand-fist";
import { HandGrabIcon } from "./icons/hand-grab";
import { HandHeartIcon } from "./icons/hand-heart";
import { HandHelpingIcon } from "./icons/hand-helping";
import { HandMetalIcon } from "./icons/hand-metal";
import { HardDriveDownloadIcon } from "./icons/hard-drive-download";
import { HardDriveUploadIcon } from "./icons/hard-drive-upload";
import { HatGlassesIcon } from "./icons/hat-glasses";
import { HeartIcon } from "./icons/heart";
import { HeartHandshakeIcon } from "./icons/heart-handshake";
import { HeartPulseIcon } from "./icons/heart-pulse";
import { HomeIcon } from "./icons/home";
import { HourglassIcon } from "./icons/hourglass";
import { IdCardIcon } from "./icons/id-card";
import { IndianRupeeIcon } from "./icons/indian-rupee";
import { InstagramIcon } from "./icons/instagram";
import { JapaneseYenIcon } from "./icons/japanese-yen";
import { KeySquareIcon } from "./icons/key-square";
import { KeyboardIcon } from "./icons/keyboard";
import { LanguagesIcon } from "./icons/languages";
import { LaptopMinimalCheckIcon } from "./icons/laptop-minimal-check";
import { LaughIcon } from "./icons/laugh";
import { LayersIcon } from "./icons/layers";
import { LayoutPanelTopIcon } from "./icons/layout-panel-top";
import { LeafIcon } from "./icons/leaf";
import { LeafyGreenIcon } from "./icons/leafy-green";
import { LinkIcon } from "./icons/link";
import { Link2Icon } from "./icons/link-2";
import { LinkedinIcon } from "./icons/linkedin";
import { LoaderIcon } from "./icons/loader";
import { LoaderCircleIcon } from "./icons/loader-circle";
import { LoaderPinwheelIcon } from "./icons/loader-pinwheel";
import { LockKeyholeIcon } from "./icons/lock-keyhole";
import { LockKeyholeOpenIcon } from "./icons/lock-keyhole-open";
import { LockOpenIcon } from "./icons/lock-open";
import { MailCheckIcon } from "./icons/mail-check";
import { MailboxIcon } from "./icons/mailbox";
import { MapPinIcon } from "./icons/map-pin";
import { MapPinCheckIcon } from "./icons/map-pin-check";
import { MapPinCheckInsideIcon } from "./icons/map-pin-check-inside";
import { MapPinHouseIcon } from "./icons/map-pin-house";
import { MapPinMinusIcon } from "./icons/map-pin-minus";
import { MapPinMinusInsideIcon } from "./icons/map-pin-minus-inside";
import { MapPinOffIcon } from "./icons/map-pin-off";
import { MapPinPlusIcon } from "./icons/map-pin-plus";
import { MapPinPlusInsideIcon } from "./icons/map-pin-plus-inside";
import { MapPinXInsideIcon } from "./icons/map-pin-x-inside";
import { MaximizeIcon } from "./icons/maximize";
import { Maximize2Icon } from "./icons/maximize-2";
import { MehIcon } from "./icons/meh";
import { MenuIcon } from "./icons/menu";
import { MessageCircleDashedIcon } from "./icons/message-circle-dashed";
import { MessageCircleMoreIcon } from "./icons/message-circle-more";
import { MessageCirclePlusIcon } from "./icons/message-circle-plus";
import { MessageCircleXIcon } from "./icons/message-circle-x";
import { MessageSquareMoreIcon } from "./icons/message-square-more";
import { MessageSquarePlusIcon } from "./icons/message-square-plus";
import { MessageSquareXIcon } from "./icons/message-square-x";
import { MicOffIcon } from "./icons/mic-off";
import { MinimizeIcon } from "./icons/minimize";
import { MonitorCheckIcon } from "./icons/monitor-check";
import { MonitorCogIcon } from "./icons/monitor-cog";
import { NfcIcon } from "./icons/nfc";
import { PaletteIcon } from "./icons/palette";
import { PanelRightOpenIcon } from "./icons/panel-right-open";
import { PartyPopperIcon } from "./icons/party-popper";
import { PauseIcon } from "./icons/pause";
import { PhilippinePesoIcon } from "./icons/philippine-peso";
import { PhoneForwardedIcon } from "./icons/phone-forwarded";
import { PhoneIncomingIcon } from "./icons/phone-incoming";
import { PhoneMissedIcon } from "./icons/phone-missed";
import { PhoneOffIcon } from "./icons/phone-off";
import { PickaxeIcon } from "./icons/pickaxe";
import { PlaneLandingIcon } from "./icons/plane-landing";
import { PlaneTakeoffIcon } from "./icons/plane-takeoff";
import { PlayIcon } from "./icons/play";
import { PoundSterlingIcon } from "./icons/pound-sterling";
import { ProjectorIcon } from "./icons/projector";
import { RabbitIcon } from "./icons/rabbit";
import { RadioIcon } from "./icons/radio";
import { RadioTowerIcon } from "./icons/radio-tower";
import { ReceiptIcon } from "./icons/receipt";
import { ReceiptCentIcon } from "./icons/receipt-cent";
import { ReceiptEuroIcon } from "./icons/receipt-euro";
import { ReceiptIndianRupeeIcon } from "./icons/receipt-indian-rupee";
import { ReceiptJapaneseYenIcon } from "./icons/receipt-japanese-yen";
import { ReceiptPoundSterlingIcon } from "./icons/receipt-pound-sterling";
import { ReceiptRussianRubleIcon } from "./icons/receipt-russian-ruble";
import { ReceiptSwissFrancIcon } from "./icons/receipt-swiss-franc";
import { ReceiptTextIcon } from "./icons/receipt-text";
import { ReceiptTurkishLiraIcon } from "./icons/receipt-turkish-lira";
import { RedoIcon } from "./icons/redo";
import { RedoDotIcon } from "./icons/redo-dot";
import { RefreshCCWIcon } from "./icons/refresh-ccw";
import { RefreshCCWDotIcon } from "./icons/refresh-ccw-dot";
import { RefreshCWOffIcon } from "./icons/refresh-cw-off";
import { RockingChairIcon } from "./icons/rocking-chair";
import { RollerCoasterIcon } from "./icons/roller-coaster";
import { RouterIcon } from "./icons/router";
import { RussianRubleIcon } from "./icons/russian-ruble";
import { SatelliteDishIcon } from "./icons/satellite-dish";
import { SaudiRiyalIcon } from "./icons/saudi-riyal";
import { ScanFaceIcon } from "./icons/scan-face";
import { ScanTextIcon } from "./icons/scan-text";
import { SendIcon } from "./icons/send";
import { ServerCogIcon } from "./icons/server-cog";
import { ServerCrashIcon } from "./icons/server-crash";
import { ShipIcon } from "./icons/ship";
import { ShipWheelIcon } from "./icons/ship-wheel";
import { ShowerHeadIcon } from "./icons/shower-head";
import { ShredderIcon } from "./icons/shredder";
import { ShrinkIcon } from "./icons/shrink";
import { SmartphoneChargingIcon } from "./icons/smartphone-charging";
import { SmartphoneNfcIcon } from "./icons/smartphone-nfc";
import { SmileIcon } from "./icons/smile";
import { SmilePlusIcon } from "./icons/smile-plus";
import { SnowflakeIcon } from "./icons/snowflake";
import { SoupIcon } from "./icons/soup";
import { SprayCanIcon } from "./icons/spray-can";
import { SquareActivityIcon } from "./icons/square-activity";
import { SquareArrowDownIcon } from "./icons/square-arrow-down";
import { SquareArrowLeftIcon } from "./icons/square-arrow-left";
import { SquareArrowRightIcon } from "./icons/square-arrow-right";
import { SquareArrowUpIcon } from "./icons/square-arrow-up";
import { SquareChevronDownIcon } from "./icons/square-chevron-down";
import { SquareChevronLeftIcon } from "./icons/square-chevron-left";
import { SquareChevronRightIcon } from "./icons/square-chevron-right";
import { SquareChevronUpIcon } from "./icons/square-chevron-up";
import { SquareStackIcon } from "./icons/square-stack";
import { StampIcon } from "./icons/stamp";
import { StethoscopeIcon } from "./icons/stethoscope";
import { SunDimIcon } from "./icons/sun-dim";
import { SunMediumIcon } from "./icons/sun-medium";
import { SunMoonIcon } from "./icons/sun-moon";
import { SunsetIcon } from "./icons/sunset";
import { SwissFrancIcon } from "./icons/swiss-franc";
import { SwitchCameraIcon } from "./icons/switch-camera";
import { SyringeIcon } from "./icons/syringe";
import { TelescopeIcon } from "./icons/telescope";
import { TerminalIcon } from "./icons/terminal";
import { ThermometerIcon } from "./icons/thermometer";
import { TicketIcon } from "./icons/ticket";
import { TimerIcon } from "./icons/timer";
import { TornadoIcon } from "./icons/tornado";
import { TrainTrackIcon } from "./icons/train-track";
import { TreeDeciduousIcon } from "./icons/tree-deciduous";
import { TreePineIcon } from "./icons/tree-pine";
import { TrendingDownIcon } from "./icons/trending-down";
import { TrendingUpDownIcon } from "./icons/trending-up-down";
import { TruckIcon } from "./icons/truck";
import { TurkishLiraIcon } from "./icons/turkish-lira";
import { TwitchIcon } from "./icons/twitch";
import { TwitterIcon } from "./icons/twitter";
import { UnderlineIcon } from "./icons/underline";
import { UndoIcon } from "./icons/undo";
import { UndoDotIcon } from "./icons/undo-dot";
import { UserCheckIcon } from "./icons/user-check";
import { UserPlusIcon } from "./icons/user-plus";
import { UserRoundCheckIcon } from "./icons/user-round-check";
import { UserRoundCogIcon } from "./icons/user-round-cog";
import { UserRoundPlusIcon } from "./icons/user-round-plus";
import { UsersRoundIcon } from "./icons/users-round";
import { VibrateIcon } from "./icons/vibrate";
import { VolumeIcon } from "./icons/volume";
import { WalletIcon } from "./icons/wallet";
import { WashingMachineIcon } from "./icons/washing-machine";
import { WavesIcon } from "./icons/waves";
import { WavesLadderIcon } from "./icons/waves-ladder";
import { WaypointsIcon } from "./icons/waypoints";
import { WifiIcon } from "./icons/wifi";
import { WifiCogIcon } from "./icons/wifi-cog";
import { WifiLowIcon } from "./icons/wifi-low";
import { WifiPenIcon } from "./icons/wifi-pen";
import { WifiSyncIcon } from "./icons/wifi-sync";
import { WindIcon } from "./icons/wind";
import { WindArrowDownIcon } from "./icons/wind-arrow-down";
import { YoutubeIcon } from "./icons/youtube";
import { ZapIcon } from "./icons/zap";
import { ZapOffIcon } from "./icons/zap-off";
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
  [AArrowDown, AArrowDownIcon],
  [AArrowUp, AArrowUpIcon],
  [Accessibility, AccessibilityIcon],
  [AirVent, AirVentIcon],
  [Airplay, AirplayIcon],
  [AlarmClock, AlarmClockIcon],
  [AlarmClockCheck, AlarmClockCheckIcon],
  [AlarmClockMinus, AlarmClockMinusIcon],
  [AlarmClockPlus, AlarmClockPlusIcon],
  [AlarmSmoke, AlarmSmokeIcon],
  [AlignCenter, AlignCenterIcon],
  [AlignRight, AlignRightIcon],
  [Ambulance, AmbulanceIcon],
  [Angry, AngryIcon],
  [Annoyed, AnnoyedIcon],
  [ArrowBigDown, ArrowBigDownIcon],
  [ArrowBigDownDash, ArrowBigDownDashIcon],
  [ArrowBigLeft, ArrowBigLeftIcon],
  [ArrowBigLeftDash, ArrowBigLeftDashIcon],
  [ArrowBigRight, ArrowBigRightIcon],
  [ArrowBigRightDash, ArrowBigRightDashIcon],
  [ArrowBigUp, ArrowBigUpIcon],
  [ArrowBigUpDash, ArrowBigUpDashIcon],
  [ArrowDown, ArrowDownIcon],
  [ArrowDown01, ArrowDown01Icon],
  [ArrowDown10, ArrowDown10Icon],
  [ArrowDownAZ, ArrowDownAZIcon],
  [ArrowDownLeft, ArrowDownLeftIcon],
  [ArrowDownRight, ArrowDownRightIcon],
  [ArrowDownZA, ArrowDownZAIcon],
  [ArrowLeft, ArrowLeftIcon],
  [ArrowUpLeft, ArrowUpLeftIcon],
  [ArrowUpRight, ArrowUpRightIcon],
  [Atom, AtomIcon],
  [AudioLines, AudioLinesIcon],
  [Axe, AxeIcon],
  [BadgeAlert, BadgeAlertIcon],
  [BadgePercent, BadgePercentIcon],
  [Ban, BanIcon],
  [Banana, BananaIcon],
  [Battery, BatteryIcon],
  [BatteryCharging, BatteryChargingIcon],
  [BatteryFull, BatteryFullIcon],
  [BatteryLow, BatteryLowIcon],
  [BatteryMedium, BatteryMediumIcon],
  [BatteryPlus, BatteryPlusIcon],
  [BatteryWarning, BatteryWarningIcon],
  [BellElectric, BellElectricIcon],
  [BicepsFlexed, BicepsFlexedIcon],
  [Binary, BinaryIcon],
  [Blocks, BlocksIcon],
  [Bluetooth, BluetoothIcon],
  [BluetoothConnected, BluetoothConnectedIcon],
  [BluetoothOff, BluetoothOffIcon],
  [BluetoothSearching, BluetoothSearchingIcon],
  [Bone, BoneIcon],
  [Bookmark, BookmarkIcon],
  [BookmarkCheck, BookmarkCheckIcon],
  [BookmarkMinus, BookmarkMinusIcon],
  [BookmarkPlus, BookmarkPlusIcon],
  [BookmarkX, BookmarkXIcon],
  [Bot, BotIcon],
  [Box, BoxIcon],
  [Boxes, BoxesIcon],
  [BriefcaseBusiness, BriefcaseBusinessIcon],
  [CalendarCheck, CalendarCheckIcon],
  [CalendarCheck2, CalendarCheck2Icon],
  [CalendarCog, CalendarCogIcon],
  [CalendarDays, CalendarDaysIcon],
  [Cast, CastIcon],
  [Cctv, CctvIcon],
  [ChartBarDecreasing, ChartBarDecreasingIcon],
  [ChartBarIncreasing, ChartBarIncreasingIcon],
  [ChartColumnDecreasing, ChartColumnDecreasingIcon],
  [ChartColumnIncreasing, ChartColumnIncreasingIcon],
  [ChartNoAxesColumnDecreasing, ChartNoAxesColumnDecreasingIcon],
  [ChartPie, ChartPieIcon],
  [ChartScatter, ChartScatterIcon],
  [ChartSpline, ChartSplineIcon],
  [Check, CheckIcon],
  [CheckCheck, CheckCheckIcon],
  [ChevronDown, ChevronDownIcon],
  [ChevronFirst, ChevronFirstIcon],
  [ChevronLeft, ChevronLeftIcon],
  [ChevronRight, ChevronRightIcon],
  [ChevronUp, ChevronUpIcon],
  [ChevronsDownUp, ChevronsDownUpIcon],
  [ChevronsLeftRight, ChevronsLeftRightIcon],
  [ChevronsRightLeft, ChevronsRightLeftIcon],
  [Chrome, ChromeIcon],
  [Cigarette, CigaretteIcon],
  [CigaretteOff, CigaretteOffIcon],
  [CircleChevronDown, CircleChevronDownIcon],
  [CircleChevronLeft, CircleChevronLeftIcon],
  [CircleChevronRight, CircleChevronRightIcon],
  [CircleChevronUp, CircleChevronUpIcon],
  [CircleDollarSign, CircleDollarSignIcon],
  [CircleGauge, CircleGaugeIcon],
  [ClipboardCheck, ClipboardCheckIcon],
  [CloudDownload, CloudDownloadIcon],
  [CloudLightning, CloudLightningIcon],
  [CloudRain, CloudRainIcon],
  [CloudRainWind, CloudRainWindIcon],
  [CloudSnow, CloudSnowIcon],
  [CloudSun, CloudSunIcon],
  [Coffee, CoffeeIcon],
  [Cog, CogIcon],
  [ConciergeBell, ConciergeBellIcon],
  [Construction, ConstructionIcon],
  [Contrast, ContrastIcon],
  [CookingPot, CookingPotIcon],
  [CornerDownRight, CornerDownRightIcon],
  [CornerLeftDown, CornerLeftDownIcon],
  [CornerLeftUp, CornerLeftUpIcon],
  [CornerRightDown, CornerRightDownIcon],
  [CornerRightUp, CornerRightUpIcon],
  [CornerUpLeft, CornerUpLeftIcon],
  [CornerUpRight, CornerUpRightIcon],
  [Cpu, CpuIcon],
  [CupSoda, CupSodaIcon],
  [DatabaseBackup, DatabaseBackupIcon],
  [Disc3, Disc3Icon],
  [DollarSign, DollarSignIcon],
  [Dribbble, DribbbleIcon],
  [Droplet, DropletIcon],
  [Drum, DrumIcon],
  [Earth, EarthIcon],
  [Euro, EuroIcon],
  [EvCharger, EvChargerIcon],
  [Expand, ExpandIcon],
  [ExternalLink, ExternalLinkIcon],
  [Eye, EyeIcon],
  [EyeOff, EyeOffIcon],
  [Facebook, FacebookIcon],
  [Fan, FanIcon],
  [Feather, FeatherIcon],
  [Figma, FigmaIcon],
  [FileChartLine, FileChartLineIcon],
  [FileCheck, FileCheckIcon],
  [FileCheck2, FileCheck2Icon],
  [FileCog, FileCogIcon],
  [FilePenLine, FilePenLineIcon],
  [FileStack, FileStackIcon],
  [FishSymbol, FishSymbolIcon],
  [Flame, FlameIcon],
  [FolderArchive, FolderArchiveIcon],
  [FolderCheck, FolderCheckIcon],
  [FolderClock, FolderClockIcon],
  [FolderCode, FolderCodeIcon],
  [FolderCog, FolderCogIcon],
  [FolderDot, FolderDotIcon],
  [FolderDown, FolderDownIcon],
  [FolderGit, FolderGitIcon],
  [FolderGit2, FolderGit2Icon],
  [FolderHeart, FolderHeartIcon],
  [FolderInput, FolderInputIcon],
  [FolderKanban, FolderKanbanIcon],
  [FolderKey, FolderKeyIcon],
  [FolderLock, FolderLockIcon],
  [FolderMinus, FolderMinusIcon],
  [FolderOpen, FolderOpenIcon],
  [FolderOutput, FolderOutputIcon],
  [FolderPlus, FolderPlusIcon],
  [FolderRoot, FolderRootIcon],
  [FolderSync, FolderSyncIcon],
  [FolderTree, FolderTreeIcon],
  [FolderUp, FolderUpIcon],
  [FolderX, FolderXIcon],
  [Folders, FoldersIcon],
  [Frame, FrameIcon],
  [Frown, FrownIcon],
  [GalleryHorizontalEnd, GalleryHorizontalEndIcon],
  [GalleryThumbnails, GalleryThumbnailsIcon],
  [Gavel, GavelIcon],
  [GeorgianLari, GeorgianLariIcon],
  [GitBranch, GitBranchIcon],
  [GitCommitHorizontal, GitCommitHorizontalIcon],
  [GitCommitVertical, GitCommitVerticalIcon],
  [GitCompare, GitCompareIcon],
  [GitCompareArrows, GitCompareArrowsIcon],
  [GitFork, GitForkIcon],
  [GitGraph, GitGraphIcon],
  [GitMerge, GitMergeIcon],
  [GitPullRequest, GitPullRequestIcon],
  [GitPullRequestClosed, GitPullRequestClosedIcon],
  [GitPullRequestCreate, GitPullRequestCreateIcon],
  [Github, GithubIcon],
  [Gitlab, GitlabIcon],
  [GraduationCap, GraduationCapIcon],
  [Grip, GripIcon],
  [GripHorizontal, GripHorizontalIcon],
  [Hammer, HammerIcon],
  [Hand, HandIcon],
  [HandCoins, HandCoinsIcon],
  [HandFist, HandFistIcon],
  [HandGrab, HandGrabIcon],
  [HandHeart, HandHeartIcon],
  [HandHelping, HandHelpingIcon],
  [HandMetal, HandMetalIcon],
  [HardDriveDownload, HardDriveDownloadIcon],
  [HardDriveUpload, HardDriveUploadIcon],
  [HatGlasses, HatGlassesIcon],
  [Heart, HeartIcon],
  [HeartHandshake, HeartHandshakeIcon],
  [HeartPulse, HeartPulseIcon],
  [Home, HomeIcon],
  [Hourglass, HourglassIcon],
  [IdCard, IdCardIcon],
  [IndianRupee, IndianRupeeIcon],
  [Instagram, InstagramIcon],
  [JapaneseYen, JapaneseYenIcon],
  [KeySquare, KeySquareIcon],
  [Keyboard, KeyboardIcon],
  [Languages, LanguagesIcon],
  [LaptopMinimalCheck, LaptopMinimalCheckIcon],
  [Laugh, LaughIcon],
  [Layers, LayersIcon],
  [LayoutPanelTop, LayoutPanelTopIcon],
  [Leaf, LeafIcon],
  [LeafyGreen, LeafyGreenIcon],
  [Link, LinkIcon],
  [Link2, Link2Icon],
  [Linkedin, LinkedinIcon],
  [Loader, LoaderIcon],
  [LoaderCircle, LoaderCircleIcon],
  [LoaderPinwheel, LoaderPinwheelIcon],
  [LockKeyhole, LockKeyholeIcon],
  [LockKeyholeOpen, LockKeyholeOpenIcon],
  [LockOpen, LockOpenIcon],
  [MailCheck, MailCheckIcon],
  [Mailbox, MailboxIcon],
  [MapPin, MapPinIcon],
  [MapPinCheck, MapPinCheckIcon],
  [MapPinCheckInside, MapPinCheckInsideIcon],
  [MapPinHouse, MapPinHouseIcon],
  [MapPinMinus, MapPinMinusIcon],
  [MapPinMinusInside, MapPinMinusInsideIcon],
  [MapPinOff, MapPinOffIcon],
  [MapPinPlus, MapPinPlusIcon],
  [MapPinPlusInside, MapPinPlusInsideIcon],
  [MapPinXInside, MapPinXInsideIcon],
  [Maximize, MaximizeIcon],
  [Maximize2, Maximize2Icon],
  [Meh, MehIcon],
  [Menu, MenuIcon],
  [MessageCircleDashed, MessageCircleDashedIcon],
  [MessageCircleMore, MessageCircleMoreIcon],
  [MessageCirclePlus, MessageCirclePlusIcon],
  [MessageCircleX, MessageCircleXIcon],
  [MessageSquareMore, MessageSquareMoreIcon],
  [MessageSquarePlus, MessageSquarePlusIcon],
  [MessageSquareX, MessageSquareXIcon],
  [MicOff, MicOffIcon],
  [Minimize, MinimizeIcon],
  [MonitorCheck, MonitorCheckIcon],
  [MonitorCog, MonitorCogIcon],
  [Nfc, NfcIcon],
  [Palette, PaletteIcon],
  [PanelRightOpen, PanelRightOpenIcon],
  [PartyPopper, PartyPopperIcon],
  [Pause, PauseIcon],
  [PhilippinePeso, PhilippinePesoIcon],
  [PhoneForwarded, PhoneForwardedIcon],
  [PhoneIncoming, PhoneIncomingIcon],
  [PhoneMissed, PhoneMissedIcon],
  [PhoneOff, PhoneOffIcon],
  [Pickaxe, PickaxeIcon],
  [PlaneLanding, PlaneLandingIcon],
  [PlaneTakeoff, PlaneTakeoffIcon],
  [Play, PlayIcon],
  [PoundSterling, PoundSterlingIcon],
  [Projector, ProjectorIcon],
  [Rabbit, RabbitIcon],
  [Radio, RadioIcon],
  [RadioTower, RadioTowerIcon],
  [Receipt, ReceiptIcon],
  [ReceiptCent, ReceiptCentIcon],
  [ReceiptEuro, ReceiptEuroIcon],
  [ReceiptIndianRupee, ReceiptIndianRupeeIcon],
  [ReceiptJapaneseYen, ReceiptJapaneseYenIcon],
  [ReceiptPoundSterling, ReceiptPoundSterlingIcon],
  [ReceiptRussianRuble, ReceiptRussianRubleIcon],
  [ReceiptSwissFranc, ReceiptSwissFrancIcon],
  [ReceiptText, ReceiptTextIcon],
  [ReceiptTurkishLira, ReceiptTurkishLiraIcon],
  [Redo, RedoIcon],
  [RedoDot, RedoDotIcon],
  [RefreshCcw, RefreshCCWIcon],
  [RefreshCcwDot, RefreshCCWDotIcon],
  [RefreshCwOff, RefreshCWOffIcon],
  [RockingChair, RockingChairIcon],
  [RollerCoaster, RollerCoasterIcon],
  [Router, RouterIcon],
  [RussianRuble, RussianRubleIcon],
  [SatelliteDish, SatelliteDishIcon],
  [SaudiRiyal, SaudiRiyalIcon],
  [ScanFace, ScanFaceIcon],
  [ScanText, ScanTextIcon],
  [Send, SendIcon],
  [ServerCog, ServerCogIcon],
  [ServerCrash, ServerCrashIcon],
  [Ship, ShipIcon],
  [ShipWheel, ShipWheelIcon],
  [ShowerHead, ShowerHeadIcon],
  [Shredder, ShredderIcon],
  [Shrink, ShrinkIcon],
  [SmartphoneCharging, SmartphoneChargingIcon],
  [SmartphoneNfc, SmartphoneNfcIcon],
  [Smile, SmileIcon],
  [SmilePlus, SmilePlusIcon],
  [Snowflake, SnowflakeIcon],
  [Soup, SoupIcon],
  [SprayCan, SprayCanIcon],
  [SquareActivity, SquareActivityIcon],
  [SquareArrowDown, SquareArrowDownIcon],
  [SquareArrowLeft, SquareArrowLeftIcon],
  [SquareArrowRight, SquareArrowRightIcon],
  [SquareArrowUp, SquareArrowUpIcon],
  [SquareChevronDown, SquareChevronDownIcon],
  [SquareChevronLeft, SquareChevronLeftIcon],
  [SquareChevronRight, SquareChevronRightIcon],
  [SquareChevronUp, SquareChevronUpIcon],
  [SquareStack, SquareStackIcon],
  [Stamp, StampIcon],
  [Stethoscope, StethoscopeIcon],
  [SunDim, SunDimIcon],
  [SunMedium, SunMediumIcon],
  [SunMoon, SunMoonIcon],
  [Sunset, SunsetIcon],
  [SwissFranc, SwissFrancIcon],
  [SwitchCamera, SwitchCameraIcon],
  [Syringe, SyringeIcon],
  [Telescope, TelescopeIcon],
  [Terminal, TerminalIcon],
  [Thermometer, ThermometerIcon],
  [Ticket, TicketIcon],
  [Timer, TimerIcon],
  [Tornado, TornadoIcon],
  [TrainTrack, TrainTrackIcon],
  [TreeDeciduous, TreeDeciduousIcon],
  [TreePine, TreePineIcon],
  [TrendingDown, TrendingDownIcon],
  [TrendingUpDown, TrendingUpDownIcon],
  [Truck, TruckIcon],
  [TurkishLira, TurkishLiraIcon],
  [Twitch, TwitchIcon],
  [Twitter, TwitterIcon],
  [Underline, UnderlineIcon],
  [Undo, UndoIcon],
  [UndoDot, UndoDotIcon],
  [UserCheck, UserCheckIcon],
  [UserPlus, UserPlusIcon],
  [UserRoundCheck, UserRoundCheckIcon],
  [UserRoundCog, UserRoundCogIcon],
  [UserRoundPlus, UserRoundPlusIcon],
  [UsersRound, UsersRoundIcon],
  [Vibrate, VibrateIcon],
  [Volume, VolumeIcon],
  [Wallet, WalletIcon],
  [WashingMachine, WashingMachineIcon],
  [Waves, WavesIcon],
  [WavesLadder, WavesLadderIcon],
  [Waypoints, WaypointsIcon],
  [Wifi, WifiIcon],
  [WifiCog, WifiCogIcon],
  [WifiLow, WifiLowIcon],
  [WifiPen, WifiPenIcon],
  [WifiSync, WifiSyncIcon],
  [Wind, WindIcon],
  [WindArrowDown, WindArrowDownIcon],
  [Youtube, YoutubeIcon],
  [Zap, ZapIcon],
  [ZapOff, ZapOffIcon],
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
