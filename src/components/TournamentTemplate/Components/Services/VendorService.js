import { vendorStore } from "../Stores/VendorsStore";
import { RESTClient } from "../Utils/RESTClient";
import AuthService from "./AuthService";

class VendorService {
  static loadVendor() {
    //AuthService.getUser().userId;
    if (!AuthService.isLoggedIn()) {
      return
    }
    const rest = new RESTClient("vendor");
    rest
      .get("/getVendor")
      .then(_vendor => {
        if (_vendor) {
          vendorStore.update((v) =>_vendor);
        } else {
          vendorStore.set(null);
        }
      })
      .catch(error => {});
  }
}

export default VendorService;
