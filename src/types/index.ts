// ============================================
// PORTFOLIO DATA TYPES
// ============================================
// This file contains TypeScript "interfaces" - think of them as blueprints
// that define what data should look like. They help catch errors and make
// code more reliable by ensuring we use the right data types.

/**
 * PersonalInfo Interface
 * This defines the structure for basic personal information
 * Think of it like a form template - it tells us what fields we need
 * The "?" after profileImage means this field is optional
 */
export interface PersonalInfo {
  name: string;          // Person's full name (text)
  title: string;         // Job title or profession (text)
  email: string;         // Email address (text)
  phone: string;         // Phone number (text)
  location: string;      // Where they live/work (text)
  bio: string;          // Short biography or description (text)
  profileImage?: string; // Optional: URL to profile picture (text)
}

/**
 * SocialLink Interface
 * This defines how we store social media links (like LinkedIn, GitHub, etc.)
 * Each social link has a platform name, URL, icon, and optional username
 */
export interface SocialLink {
  platform: string;   // Name of the platform ("LinkedIn", "GitHub", etc.)
  url: string;        // Full web address to the profile
  icon: string;       // Icon name or code to display
  username?: string;  // Optional: username on that platform
}

/**
 * Skill Interface
 * This defines how we store information about skills and abilities
 * The "|" symbol means "OR" - so category can be technical OR soft OR language
 */
export interface Skill {
  name: string;                                           // Name of the skill ("JavaScript", "Communication", etc.)
  category: 'technical' | 'soft' | 'language';          // Type of skill - must be one of these three options
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'; // Skill level - must be one of these four options
  icon?: string;                                         // Optional: icon to display with the skill
}

/**
 * Project Interface
 * This defines the structure for portfolio projects
 * It's like a detailed project card with all the information we might need
 * "string[]" means an array (list) of text items
 * "boolean" means true or false
 */
export interface Project {
  id: string;                                        // Unique identifier for the project
  title: string;                                     // Project name
  description: string;                               // Short description of the project
  longDescription?: string;                          // Optional: detailed description
  technologies: string[];                            // List of technologies used ("React", "Node.js", etc.)
  category: 'web' | 'mobile' | 'design' | 'other'; // Type of project
  status: 'completed' | 'in-progress' | 'planned'; // Current status of the project
  featured: boolean;                                 // true if this should be highlighted, false if not
  images: string[];                                  // List of image URLs for the project
  liveUrl?: string;                                  // Optional: link to live/working version
  githubUrl?: string;                                // Optional: link to source code
  startDate: string;                                 // When the project started
  endDate?: string;                                  // Optional: when the project ended
  highlights: string[];                              // List of key achievements or features
}

/**
 * Education Interface
 * This defines the structure for educational background information
 * Like a school transcript - it contains all the important education details
 */
export interface Education {
  id: string;              // Unique identifier for this education entry
  institution: string;     // Name of school/university
  degree: string;          // Type of degree ("Bachelor's", "Master's", etc.)
  field: string;           // Field of study ("Computer Science", "Design", etc.)
  startDate: string;       // When studies began
  endDate?: string;        // Optional: when studies ended (current students won't have this)
  gpa?: string;            // Optional: grade point average
  achievements?: string[]; // Optional: list of honors, awards, or special achievements
  location: string;        // Where the school is located
}

/**
 * Experience Interface
 * This defines the structure for work experience/job history
 * Like a resume entry - it contains all the important job details
 */
export interface Experience {
  id: string;                // Unique identifier for this job
  company: string;           // Name of the company/organization
  position: string;          // Job title or role
  startDate: string;         // When the job started
  endDate?: string;          // Optional: when the job ended (current jobs won't have this)
  location: string;          // Where the job was located
  description: string;       // Brief overview of the role
  responsibilities: string[]; // List of main duties and responsibilities
  technologies?: string[];   // Optional: list of technologies used in this role
  achievements?: string[];   // Optional: list of accomplishments or successes
}

/**
 * Achievement Interface
 * This defines the structure for awards, certifications, and accomplishments
 * Like a trophy case - it stores information about special recognitions
 */
export interface Achievement {
  id: string;        // Unique identifier for this achievement
  title: string;     // Name of the achievement
  description: string; // What this achievement is about
  date: string;      // When this achievement was earned
  category: 'award' | 'certification' | 'publication' | 'other' | 'achievement' | 'project'; // Type of achievement
  issuer?: string;   // Optional: who gave this achievement
  organization?: string; // Optional: organization that issued it
  url?: string;      // Optional: link to more information or certificate
}

/**
 * ContactInfo Interface
 * This defines how to store contact information and preferences
 * Like a business card - it has all the ways people can reach you
 */
export interface ContactInfo {
  email: string;       // Email address for contact
  phone: string;       // Phone number for contact
  location: string;    // Current location or address
  availability: string; // When available for work/contact
  preferredContact: 'email' | 'phone' | 'linkedin'; // Best way to reach this person
}

// ============================================
// COMPONENT PROPS TYPES
// ============================================
// These interfaces define what data React components expect to receive
// "Props" are like function parameters - they're data passed to components

/**
 * ProjectCardProps Interface
 * This defines what data the ProjectCard component needs to work
 * Think of it like a recipe - it lists all the ingredients (props) needed
 */
export interface ProjectCardProps {
  project: Project;                                    // The project data to display
  variant?: 'default' | 'featured' | 'compact';      // Optional: how the card should look
  showCategory?: boolean;                              // Optional: whether to show the project category
  onClick?: () => void;                                // Optional: function to run when card is clicked
}

/**
 * SkillBadgeProps Interface
 * This defines what data the SkillBadge component needs
 * A skill badge is like a small tag that shows a skill name
 */
export interface SkillBadgeProps {
  skill: Skill;                        // The skill data to display
  showLevel?: boolean;                 // Optional: whether to show skill level
  variant?: 'default' | 'compact';    // Optional: how the badge should look
}

/**
 * SectionProps Interface
 * This defines what data page sections need
 * Sections are like containers that hold other content
 * "React.ReactNode" means any valid React content (text, components, etc.)
 */
export interface SectionProps {
  title: string;              // Main heading for the section
  subtitle?: string;          // Optional: smaller text under the title
  children: React.ReactNode;  // The content that goes inside this section
  className?: string;         // Optional: CSS classes for custom styling
}

/**
 * NavigationItem Interface
 * This defines the structure for menu items in navigation
 * Like items in a table of contents - each has a name and where it goes
 */
export interface NavigationItem {
  name: string;    // Text to display in the menu
  href: string;    // Where this menu item should link to
  icon?: string;   // Optional: icon to show next to the text
}

// ============================================
// THEME AND UI TYPES
// ============================================
// These types control the visual appearance and user interface

/**
 * ThemeContextType Interface
 * This defines the theme system for switching between light and dark modes
 * "() => void" means a function that doesn't return anything
 */
export interface ThemeContextType {
  theme: 'light' | 'dark';  // Current theme - either light or dark mode
  toggleTheme: () => void;   // Function to switch between themes
}

/**
 * AnimationProps Interface
 * This defines settings for animations and visual effects
 * Numbers control timing, direction controls movement
 */
export interface AnimationProps {
  delay?: number;                                    // Optional: how long to wait before starting (in milliseconds)
  duration?: number;                                 // Optional: how long the animation takes (in milliseconds)
  direction?: 'up' | 'down' | 'left' | 'right';    // Optional: which way the animation moves
}

// ============================================
// FILTER AND SEARCH TYPES
// ============================================
// These types help users find and organize content

/**
 * ProjectFilters Interface
 * This defines how users can filter the project list
 * Like checkboxes on a shopping website - helps narrow down results
 */
export interface ProjectFilters {
  category?: string;   // Optional: filter by project type ("web", "mobile", etc.)
  technology?: string; // Optional: filter by technology used
  status?: string;     // Optional: filter by completion status
  featured?: boolean;  // Optional: show only featured projects
}

/**
 * SearchFilters Interface
 * This defines how search and sorting works
 * Like the controls on a search results page
 */
export interface SearchFilters {
  query: string;                           // The text user is searching for
  category: string;                        // Which category to search in
  sortBy: 'date' | 'title' | 'relevance'; // How to order the results
  sortOrder: 'asc' | 'desc';              // Ascending (A-Z, oldest first) or descending (Z-A, newest first)
}

// ============================================
// API RESPONSE TYPES
// ============================================
// These types define how data comes back from servers/databases

/**
 * ApiResponse Interface
 * This defines the standard format for responses from the server
 * "<T>" is a generic - it means this can work with any type of data
 * Like a standard envelope - the format is always the same, but contents vary
 */
export interface ApiResponse<T> {
  data: T;            // The actual data (could be projects, skills, etc.)
  success: boolean;   // true if everything worked, false if there was a problem
  message?: string;   // Optional: human-readable message about what happened
  error?: string;     // Optional: error message if something went wrong
}

// ============================================
// PORTFOLIO DATA STRUCTURE
// ============================================
// This is the main container that holds all portfolio information

/**
 * PortfolioData Interface
 * This is like the master file that contains everything about a person
 * It combines all the other interfaces into one complete portfolio
 */
export interface PortfolioData {
  personalInfo: PersonalInfo;     // Basic personal information
  socialLinks: SocialLink[];      // List of social media profiles
  skills: Skill[];                // List of skills and abilities
  projects: Project[];            // List of portfolio projects
  education: Education[];         // List of educational background
  experience: Experience[];       // List of work experience
  achievements: Achievement[];    // List of awards and accomplishments
  contactInfo: ContactInfo;       // Contact information and preferences
}

// ============================================
// SEO AND META TYPES
// ============================================
// SEO stands for "Search Engine Optimization" - helps websites show up in Google

/**
 * SEOData Interface
 * This defines information that helps search engines understand the website
 * Like a book's title page - it tells search engines what the page is about
 */
export interface SEOData {
  title: string;           // Page title that appears in browser tabs and search results
  description: string;     // Short description for search results
  keywords: string[];      // List of words related to this page (helps with searching)
  ogImage?: string;        // Optional: image that shows when shared on social media
  canonicalUrl?: string;   // Optional: the "official" web address for this page
}

// ============================================
// FORM TYPES
// ============================================
// These types define the structure of forms and form validation

/**
 * ContactFormData Interface
 * This defines what information the contact form collects
 * Like a contact form on a website - it has fields for name, email, etc.
 */
export interface ContactFormData {
  name: string;     // Person's name
  email: string;    // Person's email address
  subject: string;  // What the message is about
  message: string;  // The actual message content
}

/**
 * ContactFormErrors Interface
 * This defines error messages for form validation
 * When someone fills out a form incorrectly, these show what's wrong
 */
export interface ContactFormErrors {
  name?: string;     // Optional: error message for name field
  email?: string;    // Optional: error message for email field
  subject?: string;  // Optional: error message for subject field
  message?: string;  // Optional: error message for message field
}

// ============================================
// UTILITY TYPES
// ============================================
// These are simple types used throughout the application
// "type" is like "interface" but for simpler definitions

/**
 * LoadingState Type
 * This tracks the status of data loading (like when fetching from a server)
 * Like a progress indicator - tells us what stage we're in
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
// idle = nothing happening, loading = getting data, success = got data, error = something went wrong

/**
 * ViewMode Type
 * This defines how content can be displayed
 * Like choosing between thumbnail view or list view in a file browser
 */
export type ViewMode = 'grid' | 'list';
// grid = items arranged in rows and columns, list = items in a single column

/**
 * SortDirection Type
 * This defines the direction for sorting data
 * Like choosing A-Z or Z-A when sorting a list
 */
export type SortDirection = 'asc' | 'desc';
// asc = ascending (A-Z, 1-9, oldest first), desc = descending (Z-A, 9-1, newest first)