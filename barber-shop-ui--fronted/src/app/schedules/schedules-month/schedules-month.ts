import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ScheduleCalendar } from "../components/schedule-calendar/schedule-calendar";
import { SERVICES_TOKEN } from '../../services/service.token';
import { Schedules } from '../../services/api-client/schedules/schedules.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { IScheduleService } from '../../services/api-client/schedules/ischedules.service';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { Subscription } from 'rxjs';
import { ClientScheduleAppointmentModel, SaveScheduleModel, ScheduleAppointmentMonthModel, SelectClientModel } from '../schedule.models';
import { SaveScheduleRequest } from '../../services/api-client/schedules/schedule.models';

@Component({
  selector: 'app-schedules-month',
  imports: [ScheduleCalendar],
  templateUrl: './schedules-month.html',
  styleUrl: './schedules-month.scss',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.SCHEDULE, useClass: Schedules },
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ]
})
export class SchedulesMonth implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private selectedDate?: Date;
  monthSchedule!: ScheduleAppointmentMonthModel;
  clients: SelectClientModel[] = [];

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.SCHEDULE) private readonly httpService: IScheduleService,
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly clientHttpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly SnackBarManager: ISnackbarManagerService
  ) {}
  ngOnInit(): void {
    this.fetchSchedules(new Date());
    this.subscriptions.push(this.clientHttpService.list().subscribe(data => this.clients = data));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onDateChange(date: Date) {
    this.selectedDate = date;
    this.fetchSchedules(date);
  }

  onConfirmDelete(schedule: ClientScheduleAppointmentModel) {
    this.subscriptions.push(this.httpService.delete(schedule.id).subscribe());
  }

  onScheduleClient(schedule: SaveScheduleModel) {
    if (schedule.startAt && schedule.endAt && schedule.clientId) {
      const request: SaveScheduleRequest = { starAt: schedule.startAt, endAt: schedule.startAt, clientId: schedule.clientId};
      this.subscriptions.push(this.httpService.save(request).subscribe(() => {
        this.SnackBarManager.show('Agendamento realizado com sucesso')
        if (this.selectedDate) {
          this.fetchSchedules(this.selectedDate);
        }
      }));
    }
  }

  private fetchSchedules(currentDate: Date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    this.subscriptions.push(this.httpService.listInMounth(year, month).subscribe(data => this.monthSchedule = data));
  }
}
