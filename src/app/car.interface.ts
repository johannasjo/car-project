export interface Car {
    fordonstyp: string;
    kod: string;
    filskapaddatum: string;
    tillverkningsar: string;
    kodforjamforbarmodell: string;
    marke: string;
    modell: string;
    nybilspris: string;
    bransletyp: string;
    vardeefterschablon: string;
    justering: string;
}

export interface ApiResponse {
    limit: number;
    next: string;
    offset: number;
    queryTime: number;
    resultCount: number;
    results: Car[];
}
