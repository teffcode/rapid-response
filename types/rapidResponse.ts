export interface Row {
  id: number;
  name: string;
  lastDeploy: string;
  status: 'Active' | 'Eliminated';
  properties: number;
  lastPropertyEntry: string;
  price: string;
  isEditing: boolean;
}
