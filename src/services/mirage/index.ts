import faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

interface Auction {
  name: string;
  category: string;
  image: string;
  final_date: string;
  highest_bid: number;
  created_at: string;
}

interface CharityAuctions {
  name: string;
  description: string;
  image: string;
  finalDate: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      auction: Model.extend<Partial<Auction>>({}),
      charityAuction: Model.extend<Partial<CharityAuctions>>({}),
    },

    factories: {
      auction: Factory.extend({
        name(i: number) {
          return `Leilão ${i + 1}`;
        },
        image() {
          return faker.random.image();
        },
        category() {
          return 'Movéis';
        },
        finalDate() {
          return faker.date.soon(1);
        },
        highestBid(i: number) {
          return 1249.5 + i;
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
      charityAuction: Factory.extend({
        name(i: number) {
          return `Leilão ${i + 1}`;
        },
        image() {
          return faker.random.image();
        },
        description() {
          return 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident commodi culpa molestiae dolorum vero consequatur fugiat quae corporis inventore distinctio sit enim assumenda, ab, fuga veritatis facere atque adipisci!';
        },
        finalDate() {
          return faker.date.soon(1);
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('auction', 20);
      server.createList('charityAuction', 3);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/auctions/:id');
      this.get('/auctions');

      this.get('/charityAuctions/:id');
      this.get('/charityAuctions');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
