import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import axiosInstance from './axiosInstance'; // Adjust the path as needed

interface RestaurantRegistrationModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const RestaurantRegistrationModal = ({
	open,
	onOpenChange,
}: RestaurantRegistrationModalProps) => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		restaurantName: '',
		ownerName: '',
		email: '',
		phone: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		try {
			const response = await axiosInstance.post('request_product_demo/', {
				restaurant_name: formData.restaurantName,
				owner_name: formData.ownerName,
				email: formData.email,
				phone_number: formData.phone,
			});

			if (response.status === 200 || response.status === 201) {
				toast({
					title: 'Registration Submitted!',
					description: "We'll contact you shortly to get started.",
					variant: 'default',
				});
				setFormData({
					restaurantName: '',
					ownerName: '',
					email: '',
					phone: '',
				});
				onOpenChange(false);
			} else {
				throw new Error('Failed to submit registration.');
			}
		} catch (err) {
			console.error('Error submitting registration:', err);
			setError('Failed to submit registration. Please try again.');
			toast({
				title: 'Error',
				description: 'Failed to submit registration. Please try again.',
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Register Your Restaurant</DialogTitle>
					<DialogDescription>
						Enter your restaurant's details to start creating your 3D AR menu.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4 py-4">
					{error && <p className="text-red-500 text-sm text-center">{error}</p>}
					<div className="space-y-2">
						<label htmlFor="restaurantName" className="text-sm font-medium">
							Restaurant Name
						</label>
						<Input
							id="restaurantName"
							name="restaurantName"
							value={formData.restaurantName}
							onChange={handleInputChange}
							placeholder="Enter restaurant name"
							required
							disabled={isLoading}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="ownerName" className="text-sm font-medium">
							Owner Name
						</label>
						<Input
							id="ownerName"
							name="ownerName"
							value={formData.ownerName}
							onChange={handleInputChange}
							placeholder="Enter owner name"
							required
							disabled={isLoading}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="email" className="text-sm font-medium">
							Email
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Enter email address"
							required
							disabled={isLoading}
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="phone" className="text-sm font-medium">
							Phone Number
						</label>
						<Input
							id="phone"
							name="phone"
							type="tel"
							value={formData.phone}
							onChange={handleInputChange}
							placeholder="Enter phone number"
							required
							disabled={isLoading}
						/>
					</div>
					<DialogFooter>
						<Button type="submit" disabled={isLoading}>
							{isLoading ? 'Submitting...' : 'Submit Registration'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default RestaurantRegistrationModal;
