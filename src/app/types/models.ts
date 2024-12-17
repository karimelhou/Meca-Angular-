export interface CircuitBreaker {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  voltage: number;
  current: number;
  lastTested: Date;
}

export interface CommandControl {
  id: number;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  lastMaintenance: Date;
}

export interface Motor {
  id: number;
  name: string;
  power: number;
  rpm: number;
  status: 'running' | 'stopped' | 'maintenance';
  efficiency: number;
}

export interface Association {
  id: number;
  circuitBreakerId: number;
  motorId: number;
  commandControlId: number;
  dateCreated: Date;
}