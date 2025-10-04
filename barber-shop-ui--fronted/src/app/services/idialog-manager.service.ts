import { ComponentType } from "@angular/cdk/overlay";
import { Observable } from "rxjs";
import { YesNoDialog } from "../commons/components/yes-no-dialog/yes-no-dialog";

export interface IDialogManagerService {

    showYesNoDialog(component: ComponentType<YesNoDialog>, data: { title: string, content: string}): Observable<any>;

}