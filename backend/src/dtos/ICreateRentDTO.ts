export default interface ICreateRentDTO {
    user_id: string;
    car_id: string;
    from: Date;
    to: Date;
    request_time: number;
    return_time: number;
    total_price: number;
}
