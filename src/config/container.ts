import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { TYPES } from "./types";
import { ISFTPService } from "../interfaces/ISFTPService";
import { SFTPService } from "../services/SFTPService";
import { IGCPService } from "../interfaces/IGCPService";
import { GCPService } from "../services/GCPService";
import { IDataManagementService } from "../interfaces/IDataManagementService";
import { DataManagementService } from "../services/DataManagementService";

const iocContainer = new Container();

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// Services
iocContainer.bind<ISFTPService>(TYPES.SFTPService).to(SFTPService);
iocContainer
  .bind<IDataManagementService>(TYPES.DataManagementService)
  .to(DataManagementService);
iocContainer.bind<IGCPService>(TYPES.GCPService).to(GCPService);

export { iocContainer };
