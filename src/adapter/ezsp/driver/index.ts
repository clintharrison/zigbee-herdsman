import Debug from 'debug';
import SerialPort from "serialport";
import serialPortUtils from "src/adapter/serialPortUtils";

const debug = Debug('zigbee-herdsman:deconz:driver');

const autoDetectDefinitions = [
    {manufacturer: 'dresden elektronik ingenieurtechnik GmbH', vendorId: '1cf1', productId: '0030'}, // Conbee II
];

class Driver {
    private path: string;
    private serialPort: SerialPort;
    // private initialized: boolean;
    // private writer: Writer;
    // private parser: Parser;
    // private frameParserEvent = frameParser.frameParserEvents;
    private seqNumber: number;
    private timeoutResetTimeout: any;
    private apsRequestFreeSlots: number;

    public constructor(path: string) {
        this.path = path;
    }

    public static async autoDetectPath(): Promise<string> {
        const paths = await serialPortUtils.find(autoDetectDefinitions);
        return paths.length > 0 ? paths[0] : null;
    }
}

export default Driver;