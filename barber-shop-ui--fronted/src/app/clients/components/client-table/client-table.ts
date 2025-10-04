import { AfterViewInit, Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClientModelTable } from '../../client.models';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { IDialogManagerService } from '../../../services/idialog-manager.service';
import { DialogManager } from '../../../services/dialog-manager.service';
import { YesNoDialog } from '../../../commons/components/yes-no-dialog/yes-no-dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CustomPaginator } from './custom-paginator';

@Component({
  selector: 'app-client-table',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatTooltipModule],
  templateUrl: './client-table.html',
  styleUrl: './client-table.scss',
  providers: [
    { provide: SERVICES_TOKEN.DIALOG, useClass: DialogManager},
    { provide: MatPaginatorIntl, useClass: CustomPaginator}
  ]
})
export class ClientTable implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  clients: ClientModelTable[] = [];

  dataSource!: MatTableDataSource<ClientModelTable>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  private dialogManagerServiceSubscriptions?: Subscription;

  @Output()
  onConfirmDelete = new EventEmitter<ClientModelTable>();

  @Output()
  onRequestUpdate = new EventEmitter<ClientModelTable>();

  constructor(
    @Inject(SERVICES_TOKEN.DIALOG) private readonly dialogManagerService: IDialogManagerService
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clients'] && this.clients) {
      this.dataSource = new MatTableDataSource<ClientModelTable>(this.clients);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.dialogManagerServiceSubscriptions) {
      this.dialogManagerServiceSubscriptions.unsubscribe();
    }
  }

  formatPhone(phone: string) {
    return `( ${phone.substring(0, 2)} ) ${phone.substring(2, 7)} - ${phone.substring(7)}`;
  }

  update(client: ClientModelTable) {
    this.onRequestUpdate.emit(client);
  }

  delete(client: ClientModelTable) {
    this.dialogManagerService.showYesNoDialog(
      YesNoDialog,
      { title: 'Exclusão de cliente', content: `Confirma a exclusão do cliente ${client.name}`}
    )
    .subscribe(result => {
      if (result) {
        this.onConfirmDelete.emit(client);
        const updatedList = this.dataSource.data.filter(c => c.id !== client.id);
        this.dataSource = new MatTableDataSource<ClientModelTable>(updatedList);
      }
    });
  }
}
