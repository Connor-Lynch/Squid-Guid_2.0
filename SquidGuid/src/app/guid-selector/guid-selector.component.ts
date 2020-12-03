import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guid-selector',
  templateUrl: './guid-selector.component.html',
  styleUrls: ['./guid-selector.component.scss']
})
export class GuidSelectorComponent implements OnInit {
  public guid: string;

  constructor() { }

  ngOnInit(): void {
    this.generateGuid();
  }

  generateGuid() {
    var guid = this.groupOfFour() + this.groupOfFour() + '-' +
      this.groupOfFour() + '-' +
      this.groupOfFour() + '-' +
      this.groupOfFour() + '-' +
      this.groupOfFour() + this.groupOfFour() + this.groupOfFour();

    // if (hyphens == 'true') {
    //     guid = guid.toString();
    //     guid = guid.replace(/-/g, '');
    // }
    // if (braces == 'true') {
    //     guid = '{' + guid + '}';
    // }
    // if (upper == 'true') {
    //     guid = guid.toUpperCase();
    // }

    this.guid = guid;
    this.copyGuid();
  }

  copyGuid() {
    const guid = document.createElement('textarea');
    guid.style.position = 'fixed';
    guid.style.left = '0';
    guid.style.top = '0';
    guid.style.opacity = '0';
    guid.value = this.guid;
    document.body.appendChild(guid);
    guid.focus();
    guid.select();
    document.execCommand('copy');
    document.body.removeChild(guid);
  }

  private groupOfFour() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

}
