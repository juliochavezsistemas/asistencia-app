import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn({ type: 'timestamp', select: false })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', select: false })
    updated_at: Date;
}