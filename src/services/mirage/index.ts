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

export function makeServer() {
  const server = createServer({
    models: {
      auction: Model.extend<Partial<Auction>>({}),
      charityAuction: Model.extend<Partial<Auction>>({}),
    },

    factories: {
      auction: Factory.extend({
        name(i: number) {
          return `Leilão ${i + 1}`;
        },
        category() {
          return 'Movéis';
        },
        image() {
          return faker.random.image();
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
    },

    seeds(server) {
      server.createList('auction', 20);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/auctions');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
