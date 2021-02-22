import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  @ViewChild("myCanvas")
  myCanvas: ElementRef<HTMLCanvasElement>;

  public ctx: CanvasRenderingContext2D;
  public radius;
  public refreshInterval;

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.radius = this.myCanvas.nativeElement.height / 2;
    this.ctx.translate(this.radius, this.radius);
    this.radius = this.radius * 0.90
    this.refreshInterval = setInterval(() => {
      this.drawClock();
    }, 1000);
  }

  drawClock() {
    this.drawFace();
    this.drawNumbers();
    this.drawTime();
  }

  drawFace(): void {
    var grad;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    grad = this.ctx.createRadialGradient(0, 0, this.radius * 0.95, 0, 0, this.radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = this.radius * 0.1;
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#333';
    this.ctx.fill();
  }

  drawNumbers() {
    var ang;
    var num;
    this.ctx.font = this.radius * 0.15 + "px arial";
    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      this.ctx.rotate(ang);
      this.ctx.translate(0, -this.radius * 0.85);
      this.ctx.rotate(-ang);
      this.ctx.fillText(num.toString(), 0, 0);
      this.ctx.rotate(ang);
      this.ctx.translate(0, this.radius * 0.85);
      this.ctx.rotate(-ang);
    }
  }

  drawTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(this.ctx, hour, this.radius * 0.5, this.radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(this.ctx, minute, this.radius * 0.8, this.radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    this.drawHand(this.ctx, second, this.radius * 0.9, this.radius * 0.02);
  }


  drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  ngOnDestroy() {
    clearInterval(this.refreshInterval);
  }

}
