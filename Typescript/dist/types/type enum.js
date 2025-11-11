"use strict";
//Não existe no JS 
//Serve para enumerar propriedades
Object.defineProperty(exports, "__esModule", { value: true });
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#ffffff";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN"; //por padrão é 0 mas é possível atribuir outro valor
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
})(StatusPermission || (StatusPermission = {}));
//# sourceMappingURL=type%20enum.js.map