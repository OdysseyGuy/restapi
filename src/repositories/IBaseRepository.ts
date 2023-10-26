export default interface IBaseRepository<T> {
  find(id: number): Promise<T | undefined>;
  findAll(limit: number, offset: number): Promise<T[]>;
  create(data: object): Promise<boolean>;
  update(data: object): Promise<boolean>;
  delete(entity: T): Promise<boolean>;
  deleteById(id: number): Promise<boolean>;
}
