import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  barcodedata: any="place to show barcode data";
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {}

  onClick() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
        this.barcodedata=barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
