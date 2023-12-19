import { server } from './server/server';

server.listen(process.env.port || 3333, () => {
  console.log(`App rodando na porta ${process.env.port || 3333}`);
});

