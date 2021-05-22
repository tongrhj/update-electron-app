import updater from '../'

interface ICustomLogger {
  log(message: string, ...args: string[]): void;
}

const customLogger: ICustomLogger = {
  log: (): void => {
    return
  }
}

updater<ICustomLogger>({
  logger: customLogger,
  host: "https://github.com",
  notifyUser: true,
  repo: "HashimotoYT/hab",
  updateInterval: "10 minutes",
  startChecksOnInit: true
});

updater()

updater({
  logger: console,
})
