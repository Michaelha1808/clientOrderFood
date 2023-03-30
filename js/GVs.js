class GVs {
    // static SERVERNAME = "http://localhost:8386";
    // static SERVERNAME = "http://192.168.1.110:8386";
    static SERVERNAME = "http://192.168.1.123:8386";
    // static SERVERNAME = "http://192.168.1.23:8386"
    //   static SERVERNAME = "tienganhtieuhoc.com.vn";
    static LOGIN = this.SERVERNAME + "/users/login";
    static LOGOUT = this.SERVERNAME + "/users/logout";
    static GETALLFOOD = this.SERVERNAME + "/foods";
    static GETLISTORDER = this.SERVERNAME + "/orders/getListOrders";
    static GETHISTORYORDERS = this.SERVERNAME + "/orders/getHistoryOrders";
    static CANCELORDERS = this.SERVERNAME + "/orders/cancelOrders";
    static GETORDER = this.SERVERNAME + "/orders/getOrder";
    static GETTIMEORDER = this.SERVERNAME + "/orders/getTimeOrder";
    static GETSTATISTICS = this.SERVERNAME + "/orders/getStatistics";
    static CREATEORDER = this.SERVERNAME + "/orders/create";

    //! admin
    static UPDATEFOODS = this.SERVERNAME + "/foods/updateFoods";
    static GETALLACCOUNT = this.SERVERNAME + "/users/getAllAccounts";
    static DELETEACCOUNT = this.SERVERNAME + "/users/deleteAccount";
    static UPDATEACCOUNT = this.SERVERNAME + "/users/updateAccount";
    static ADDACCOUNT = this.SERVERNAME + "/users/signUp";
}