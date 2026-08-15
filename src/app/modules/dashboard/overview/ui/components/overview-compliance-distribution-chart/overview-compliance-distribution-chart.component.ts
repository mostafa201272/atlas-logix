import { Component, AfterViewInit, ViewChild, inject, effect } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexMarkers,
  ApexPlotOptions,
  ApexResponsive,
  ApexGrid,
  ApexAnnotations,
  ApexStates,
  ApexTheme,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ShipmentsFacade } from '@modules/dashboard/shipments/facade/shipments.facade';
import { IShipment } from '@modules/dashboard/shipments/models/interfaces';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  fill?: ApexFill;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  grid?: ApexGrid;
  annotations?: ApexAnnotations;
  states?: ApexStates;
  theme?: ApexTheme;
  colors?: string[];
  labels?: any;
};

@Component({
  selector: 'atlas-overview-compliance-distribution-chart',
  imports: [NgApexchartsModule],
  templateUrl: './overview-compliance-distribution-chart.component.html',
  styleUrl: './overview-compliance-distribution-chart.component.scss',
})
export class OverviewComplianceDistributionChartComponent implements AfterViewInit {
  @ViewChild('chart') chart!: ChartComponent;

  private readonly shipmentsFacade = inject(ShipmentsFacade);

  public chartOptions: Partial<ChartOptions> = {
    series: [0, 0, 0],
    chart: {
      type: 'donut',
      width: '100%',
      height: 320,
    },
    labels: ['Approved', 'Pending', 'Rejected'],
    colors: ['#10B981', '#F59E0B', '#EF4444'],
    plotOptions: {
      pie: {
        borderRadius: 8,
        spacing: 4,
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Compliance',
            },
          },
        },
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320,
          },
        },
      },
    ],
  };

  constructor() {
    effect(() => {
      const list: IShipment[] = this.shipmentsFacade.shipments() || [];
      const approved = list.filter((s) => s.compliance_status === 'APPROVED').length;
      const pending = list.filter((s) => s.compliance_status === 'PENDING').length;
      const rejected = list.filter((s) => s.compliance_status === 'REJECTED').length;

      this.chartOptions = {
        ...this.chartOptions,
        series: [approved, pending, rejected],
      };
    });
  }

  ngAfterViewInit() {
    (window as any).ApexCharts?.setLicense?.(
      'APEX-eyJleHBpcnlEYXRlIjoiMjEyNi0wNy0wNCIsImlzc3VlRGF0ZSI6IjIwMjYtMDctMjgiLCJwbGFuIjoicHJlbWl1bSIsImRvbWFpbnMiOlsiYXBleGNoYXJ0cy5jb20iLCIxMjcuMC4wLjEiLCJsb2NhbGhvc3QiXSwic2lnIjoieVBmb1VCc0Z3TU9ZdUEyaEZkR0I2Y1FtZ0JITUtXcVdJSjB2NVRESXRZbFR3eDJMUmh6R2x0RUc3VXJ4X0s3b25ZMWRZb2Z2VGItN01ydFYyNDVyOWcifQ==',
    );
  }
}
