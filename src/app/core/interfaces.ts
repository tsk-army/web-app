export interface IAdminOptions {
    title: string;
    description: string;
    order: number;
    route: string;
}

export interface IUser {
    twitchId: string;
    name: string;
    lastname: string;
    points: number;
    birthdate: Date;
}