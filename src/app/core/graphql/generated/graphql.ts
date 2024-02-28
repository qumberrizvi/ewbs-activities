import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  /** Activity Code */
  code: Scalars['String']['output'];
  /** Created at */
  createdAt: Scalars['DateTime']['output'];
  /** Created by user */
  createdBy: User;
  /** Activity description */
  description?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Activity name */
  name: Scalars['String']['output'];
  /** Updated at */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Zone of the activity */
  zone: Zone;
};

export type CreateActivityInput = {
  /** Activity Code */
  code: Scalars['String']['input'];
  /** Activity description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Activity name */
  name: Scalars['String']['input'];
  /** Zone Slug  */
  zone: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  /** Customer email */
  email: Scalars['String']['input'];
  /** Customer name */
  name: Scalars['String']['input'];
  /** Customer phone */
  phone: Scalars['String']['input'];
};

export type CreatePackageInput = {
  /** Description of feature */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Features of the package */
  features: Array<PackageFeatureInput>;
  /** Licence name */
  name: Scalars['String']['input'];
  /** Zone of the package */
  zone: Scalars['ID']['input'];
};

export type CreateProposalInput = {
  /** Activities selected for Proposal */
  activities: Array<Scalars['ID']['input']>;
  /** Customer this proposal is assigned to. */
  customer: Scalars['ID']['input'];
  /** Features added to proposal. */
  features: Array<ProposalFeatureInput>;
  /** Notes related to the proposal */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Package selected for Proposal */
  package: Scalars['ID']['input'];
  /** Proposal status */
  status?: InputMaybe<ProposalStatus>;
  /** Proposal Name */
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** User Email */
  email: Scalars['String']['input'];
  /** First Name */
  firstName: Scalars['String']['input'];
  /** Last Name */
  lastName: Scalars['String']['input'];
  /** User Password */
  password: Scalars['String']['input'];
  /** User phone */
  phone: Scalars['String']['input'];
  /** Role of the user */
  role: Role;
  signature?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateZoneInput = {
  /** Background color */
  color?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  /** Created at */
  createdAt: Scalars['DateTime']['output'];
  /** Created by user */
  createdBy: User;
  /** Customer email */
  email: Scalars['String']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Customer name */
  name: Scalars['String']['output'];
  /** Customer phone */
  phone: Scalars['String']['output'];
  /** Updated at */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type File = {
  __typename?: 'File';
  /** Created at */
  createdAt: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** File name */
  name?: Maybe<Scalars['String']['output']>;
  /** File path */
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity: Activity;
  createCustomer: Customer;
  createPackage: Package;
  createProposal: Proposal;
  createUser: User;
  createZone: Zone;
  removeActivity: Scalars['Boolean']['output'];
  removeCustomer: Scalars['Boolean']['output'];
  removePackage: Package;
  removeProposal: Scalars['Boolean']['output'];
  removeUser: Scalars['Boolean']['output'];
  removeZone: Scalars['Boolean']['output'];
  signIn: SignIn;
  syncActivities: Scalars['Boolean']['output'];
  updateActivity: Activity;
  updateCustomer: Customer;
  updatePackage: Package;
  updateProposal: Proposal;
  updateUser: User;
  updateZone: Zone;
};


export type MutationCreateActivityArgs = {
  createActivityInput: CreateActivityInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreatePackageArgs = {
  createPackageInput: CreatePackageInput;
};


export type MutationCreateProposalArgs = {
  createProposalInput: CreateProposalInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateZoneArgs = {
  createZoneInput: CreateZoneInput;
};


export type MutationRemoveActivityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePackageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProposalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveZoneArgs = {
  slug: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationUpdateActivityArgs = {
  updateActivityInput: UpdateActivityInput;
};


export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdatePackageArgs = {
  updatePackageInput: UpdatePackageInput;
};


export type MutationUpdateProposalArgs = {
  updateProposalInput: UpdateProposalInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateZoneArgs = {
  updateZoneInput: UpdateZoneInput;
};

export type Package = {
  __typename?: 'Package';
  /** Description of feature */
  description?: Maybe<Scalars['String']['output']>;
  /** Features of the package */
  features: Array<PackageFeature>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Licence name */
  name: Scalars['String']['output'];
  /** Zone of the package */
  zone: Zone;
};

export type PackageFeature = {
  __typename?: 'PackageFeature';
  /** ID */
  id: Scalars['ID']['output'];
  /** Name of the feature */
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Int']['output'];
  /** Whether feature is included or not applicable */
  type: PackageFeatureTypes;
};

export type PackageFeatureInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: Scalars['Int']['input'];
  type: PackageFeatureTypes;
};

export enum PackageFeatureTypes {
  Chargeable = 'CHARGEABLE',
  Included = 'INCLUDED',
  Na = 'NA'
}

export type Proposal = {
  __typename?: 'Proposal';
  /** List of activities */
  activities: Array<Activity>;
  /** Consultant that created the proposal. */
  consultant: User;
  /** Created at */
  createdAt: Scalars['DateTime']['output'];
  /** Customer this proposal is assigned to. */
  customer: Customer;
  /** Features selected for proposal */
  features: Array<ProposalFeature>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Notes related to the proposal */
  notes?: Maybe<Scalars['String']['output']>;
  /** Package proposed */
  package: Package;
  /** Proposal status */
  status: ProposalStatus;
  /** Proposal Title */
  title: Scalars['String']['output'];
  /** Updated at */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProposalFeature = {
  __typename?: 'ProposalFeature';
  /** ID */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Int']['output'];
  /** Whether feature is included or not applicable */
  type: PackageFeatureTypes;
};

export type ProposalFeatureInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: Scalars['Int']['input'];
  type: PackageFeatureTypes;
};

export enum ProposalStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Sent = 'SENT'
}

export type Query = {
  __typename?: 'Query';
  activities: Array<Activity>;
  activitiesByZone: Array<Activity>;
  activity: Activity;
  customer: Customer;
  customers: Array<Customer>;
  package: Package;
  packages: Array<Package>;
  packagesByZone: Array<Package>;
  ping: Scalars['String']['output'];
  proposal: Proposal;
  proposals: Array<Proposal>;
  searchActivities: Array<Activity>;
  searchCustomers: Array<Customer>;
  searchProposals: Array<Proposal>;
  user: User;
  users: Array<User>;
  whoAmI: User;
  zone: Zone;
  zones: Array<Zone>;
};


export type QueryActivitiesByZoneArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  zone: Scalars['String']['input'];
};


export type QueryActivityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPackageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPackagesByZoneArgs = {
  zone: Scalars['String']['input'];
};


export type QueryProposalArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchActivitiesArgs = {
  keyword: Scalars['String']['input'];
  zoneId?: InputMaybe<Scalars['String']['input']>;
  zoneSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchCustomersArgs = {
  keyword: Scalars['String']['input'];
};


export type QuerySearchProposalsArgs = {
  keyword: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZoneArgs = {
  slug: Scalars['String']['input'];
};

export enum Role {
  Admin = 'Admin',
  Manager = 'Manager',
  Member = 'Member'
}

export type SignIn = {
  __typename?: 'SignIn';
  accessToken: Scalars['String']['output'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateActivityInput = {
  /** Activity Code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Activity description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Activity name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Zone Slug  */
  zone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  /** Customer email */
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Customer name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Customer phone */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePackageInput = {
  /** Description of feature */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Features of the package */
  features?: InputMaybe<Array<PackageFeatureInput>>;
  id: Scalars['ID']['input'];
  /** Licence name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Zone of the package */
  zone?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateProposalInput = {
  /** Activities selected for Proposal */
  activities?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Customer this proposal is assigned to. */
  customer?: InputMaybe<Scalars['ID']['input']>;
  /** Features added to proposal. */
  features?: InputMaybe<Array<ProposalFeatureInput>>;
  id: Scalars['ID']['input'];
  /** Notes related to the proposal */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Package selected for Proposal */
  package?: InputMaybe<Scalars['ID']['input']>;
  /** Proposal status */
  status?: InputMaybe<ProposalStatus>;
  /** Proposal Name */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  /** User Email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Last Name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User Password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Role of the user */
  role?: InputMaybe<Role>;
  signature?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateZoneInput = {
  /** Background color */
  color?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  /** User Email */
  email: Scalars['String']['output'];
  /** First Name */
  firstName: Scalars['String']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Last Name */
  lastName: Scalars['String']['output'];
  /** User phone */
  phone: Scalars['String']['output'];
  /** Role of the user */
  role: Role;
  /** Signature of the user */
  signature?: Maybe<File>;
};

export type Zone = {
  __typename?: 'Zone';
  /** Background color */
  color?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Logo URL */
  logo?: Maybe<File>;
  /** Name of the Zone */
  name: Scalars['String']['output'];
  /** Unique slug of the zone */
  slug: Scalars['String']['output'];
};

export type CreateActivityMutationVariables = Exact<{
  input: CreateActivityInput;
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createActivity: { __typename?: 'Activity', id: string, code: string, name: string, description?: string | null } };

export type ActivitiesByZoneQueryVariables = Exact<{
  zone: Scalars['String']['input'];
}>;


export type ActivitiesByZoneQuery = { __typename?: 'Query', activitiesByZone: Array<{ __typename?: 'Activity', id: string, code: string, name: string, description?: string | null }> };

export type ActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, name: string, code: string, description?: string | null }> };

export type SearchActivitiesQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  zoneId?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchActivitiesQuery = { __typename?: 'Query', searchActivities: Array<{ __typename?: 'Activity', id: string, code: string, name: string, description?: string | null }> };

export type ZoneQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ZoneQuery = { __typename?: 'Query', zone: { __typename?: 'Zone', id: string, name: string, slug: string, color?: string | null, logo?: { __typename?: 'File', id: string, url: string, name?: string | null, createdAt: any } | null } };

export type ZonesQueryVariables = Exact<{ [key: string]: never; }>;


export type ZonesQuery = { __typename?: 'Query', zones: Array<{ __typename?: 'Zone', id: string, name: string, slug: string, color?: string | null, logo?: { __typename?: 'File', id: string, url: string, name?: string | null, createdAt: any } | null }> };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const CreateActivityDocument = gql`
    mutation CreateActivity($input: CreateActivityInput!) {
  createActivity(createActivityInput: $input) {
    id
    code
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateActivityGQL extends Apollo.Mutation<CreateActivityMutation, CreateActivityMutationVariables> {
    document = CreateActivityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ActivitiesByZoneDocument = gql`
    query ActivitiesByZone($zone: String!) {
  activitiesByZone(zone: $zone) {
    id
    code
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivitiesByZoneGQL extends Apollo.Query<ActivitiesByZoneQuery, ActivitiesByZoneQueryVariables> {
    document = ActivitiesByZoneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ActivitiesDocument = gql`
    query Activities {
  activities {
    id
    name
    code
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivitiesGQL extends Apollo.Query<ActivitiesQuery, ActivitiesQueryVariables> {
    document = ActivitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchActivitiesDocument = gql`
    query SearchActivities($keyword: String!, $zoneId: String) {
  searchActivities(keyword: $keyword, zoneId: $zoneId) {
    id
    code
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchActivitiesGQL extends Apollo.Query<SearchActivitiesQuery, SearchActivitiesQueryVariables> {
    document = SearchActivitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZoneDocument = gql`
    query Zone($slug: String!) {
  zone(slug: $slug) {
    id
    name
    slug
    color
    logo {
      id
      url
      name
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZoneGQL extends Apollo.Query<ZoneQuery, ZoneQueryVariables> {
    document = ZoneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZonesDocument = gql`
    query Zones {
  zones {
    id
    name
    slug
    color
    logo {
      id
      url
      name
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZonesGQL extends Apollo.Query<ZonesQuery, ZonesQueryVariables> {
    document = ZonesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }