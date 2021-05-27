import { HttpErrorResponse } from "@angular/common/http";

// const NEW_LINE = '&#10;';
const NEW_LINE = '\n';

export class Util {
    static TIME_FROM = "00:00";
    static TIME_TO = "23:59";

    
    /**
     * Creates an error message that can be shown to the user.
     * @param error The original error
     * @returns error message 
     */
    public static createErrorMessage(error: Response): string {
        let message = "Algemene fout";
        if (error.status == 404 && error instanceof HttpErrorResponse) {
            message = "De aanvraag kon niet worden verwerkt, de service is niet beschikbaar (404).";        
        }

        return message;
    }


}

