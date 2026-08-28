export type NamedThingId = string;
export type PersonId = string;
/**
* The vital status of a person
*/
export enum PersonStatus {
    
    /** the person is living */
    ALIVE = "ALIVE",
    /** the person is deceased */
    DEAD = "DEAD",
    /** the vital status is not known */
    UNKNOWN = "UNKNOWN",
};


/**
 * A generic grouping for any identifiable entity
 */
export interface NamedThing {
    /** A unique identifier for a thing */
    id: string,
    /** A human-readable name for a thing */
    name?: string,
    /** A human-readable description for a thing */
    description?: string,
}


/**
 * Represents a Person
 */
export interface Person extends NamedThing {
    /** The main email address of a person */
    primary_email?: string,
    /** Date on which a person is born */
    birth_date?: date,
    /** Number of years since birth */
    age_in_years?: number,
    /** living or dead status */
    vital_status?: string,
}


/**
 * A holder for Person objects
 */
export interface PersonCollection {
    people?: Person[],
}



