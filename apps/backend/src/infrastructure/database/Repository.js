import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

const { dirname } = import.meta;

export class Repository {
  path = '';
  constructor(path) {
    this.path = `${dirname}/../../..${path}`;
    console.log('Repository path: ', this.path);
  }

  async findById(id) {
    try {
      const data = await readFile(this.path, 'utf-8');
      const dataArr = JSON.parse(data);
      const result = dataArr.find((item) => item.id === id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(updatedData) {
    try {
      const data = await readFile(this.path, 'utf-8');
      const dataArr = JSON.parse(data);

      const item = dataArr.find((item) => item.id === updatedData.id);

      const updatedItem = {
        ...item,
        ...updatedData,
      };

      const updatedDataArr = dataArr.map((item) => {
        if (item.id === updatedData.id) {
          return updatedItem;
        }
        return item;
      });

      const updatedDataStr = JSON.stringify(updatedDataArr, null, 2);

      await writeFile(this.path, updatedDataStr, 'utf-8');

      return updatedItem;
    } catch (error) {
      throw error;
    }
  }
}
