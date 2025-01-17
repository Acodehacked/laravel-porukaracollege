import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    flash: {
        image: {
            data: Image | null
        }
        success: string | null;
        error: string | null;
    };
    ziggy: Config & { location: string };
};
export interface Event {
    id?: number; // Optional for dynamically created objects
    title: string; // Title of the event
    description?: string; // Description of the event, optional
    date?: string; // Date in YYYY-MM-DD format, optional
    images?: string[]; // Array of image URLs, optional
    eventType?: 'UpcomingEvent' | 'Announcement' | 'Events' | 'NSS Event'; // Enum for event type
    link?: string; // Link, optional
    createdAt?: string; // Created timestamp, optional
    updatedAt?: string; // Updated timestamp, optional
}
export interface Admission {
    id?: number; // Optional for dynamically created objects
    name: string; // Name of the student
    mobile: string; // Mobile number
    email: string; // Email address
    address: string; // Residential address
    appliedCourse: string; // Applied course
    submittedAt?: string; // Submitted timestamp, optional
    createdAt?: string; // Created timestamp, optional
    updatedAt?: string; // Updated timestamp, optional
}

export interface Course {
    id?: number; // Optional if created dynamically
    title: string; // Title of the course
    text: string; // Short text for the course
    description?: string; // Detailed description, optional
    duration: number; // Duration of the course in years
    image?: string; // Path to course image, optional
    eligibility: string; // Eligibility criteria
    link: string; // URL link to course details
    slug: string; // Unique slug for the course
    specializations: string[]; // Array of specializations
    createdAt?: string; // Created timestamp, optional
    updatedAt?: string; // Updated timestamp, optional
}