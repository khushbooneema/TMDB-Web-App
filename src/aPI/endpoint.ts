export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    rating: number;
    poster_path: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieDetail extends Movie {
    runtime: number;
    languages: Language[];
    production_companies: ProductionCompany[];
    status: string
}

export interface Language {
    name: string;
    english_name: string;
}

export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface User {
    id: number,
    name: string,
    username: string,
    password: string,
    emailId: string,
    country: string,
    zipcode: string
}

export interface MovieDetail extends Movie {
    runtime: number;
    languages: Language[];
    production_companies: ProductionCompany[];
}

export interface Language {
    name: string;
    english_name: string;
}

export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

export interface MovieCredits {
    cast: CastMembers[]
}

interface CastMembers {
    id: number;
    name: string;
    character: string;
    profile_path: string;
}

export interface PeopleResponse {
    page: number;
    results: People[];
    total_pages: number;
    total_results: number;
}

export interface People {
    id: number;
    gender: string;
    name: string;
    profile_path: string;
    popularity: number;
    known_for_department: string
    known_for: Movie[];
}