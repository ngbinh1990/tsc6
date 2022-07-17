import React from 'react';
import {
	Avatar,
	Box,
	Container,
	Grid,
	List,
	ListItemButton,
	ListItemText,
	Stack,
	Typography,
	Link,
} from '@mui/material';

import Header from '../../components/Header/Header.js';
import './Layout.css';

import phone from '../../assets/img/icon/phone.png';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Box className='section-one'>
				<Header />
			</Box>
			<Outlet />
			<Box className='footer'>
				<Container>
					<Grid container spacing={2}>
						<Grid item md={4}>
							<Stack direction='column' alignItems='flex-start'>
								<Box
									sx={{
										width: '100%',
										height: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexDirection: 'column',
									}}>
									<Box className='footer-logo'></Box>
									<Typography
										sx={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
										CÔNG TY CỔ PHẦN DỊCH VỤ THƯƠNG MẠI VÀ SÀN BẤT ĐỘNG SẢN
										HANDICO6
									</Typography>
								</Box>
								<Typography
									sx={{
										fontSize: '14px',
										color: '#666',
										lineHeight: '1.5',
										marginTop: '20px',
									}}>
									Địa chỉ: Tầng 6A, tòa nhà Hỗn hợp, lô đất C1, đường Lê Văn
									Lương, Phường Nhân Chính, Quận Thanh Xuân, Thành phố Hà Nội
								</Typography>
								<Typography
									sx={{
										fontSize: '14px',
										color: '#666',
										lineHeight: '1.5',
										marginTop: '10px',
									}}>
									Điện thoại: 0911.453186 – 0915.547452 – 0912.287452
								</Typography>
								<Typography
									sx={{
										fontSize: '14px',
										color: '#666',
										lineHeight: '1.5',
										marginTop: '10px',
									}}>
									Email: tsc6.jsc@gmail.com
								</Typography>
							</Stack>
						</Grid>
						<Grid item md={4}>
							<Link
								className='map'
								href='https://www.google.com/maps?ll=21.005414,105.804044&z=15&t=m&hl=vi&gl=US&mapclient=embed&cid=6186136580384232485'></Link>
						</Grid>
						<Grid item md={4}>
							<Typography
								sx={{
									marginTop: '20px',
									color: '#1a47ac',
									fontSize: '1.5rem',
									fontWeight: 'bold',
								}}>
								HỖ TRỢ
							</Typography>
							<Box className='support'>
								<List>
									<ListItemButton sx={{ width: '200px' }}>
										<Box
											className='phone'
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}>
											<Avatar
												alt='phone'
												src={phone}
												variant='square'
												sx={{ width: '25px', height: '25px' }}
											/>
										</Box>
										<ListItemText sx={{ color: 'white' }}>
											0911.453816
										</ListItemText>
									</ListItemButton>
									<ListItemButton
										component={'a'}
										sx={{ width: '200px' }}
										href='https://zalo.me/0911.453186'>
										<Box className='zalo'></Box>
										<ListItemText sx={{ color: 'white' }}>
											0911.453816
										</ListItemText>
									</ListItemButton>
									<ListItemButton sx={{ width: '200px' }}>
										<Box className='viber'></Box>
										<ListItemText sx={{ color: 'white' }}>
											0911.453816
										</ListItemText>
									</ListItemButton>
									<ListItemButton sx={{ width: '200px' }}>
										<Box className='mail'></Box>
										<ListItemText sx={{ color: 'white' }}>
											0911.453816
										</ListItemText>
									</ListItemButton>
								</List>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				className='copy-right'
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgb(16,36,96)',
					padding: '10px',
				}}>
				<Typography color='white'>Copyright@ 2022 TSC6, JSC.</Typography>
			</Box>
		</>
	);
};

export default Layout;
